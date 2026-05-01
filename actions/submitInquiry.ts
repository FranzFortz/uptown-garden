'use server';

import { supabaseAdmin } from '@/lib/supabase/server';
import { inquirySchema, type InquiryInput } from '@/lib/validators/inquiry';
import { sendInquiryEmail } from '@/lib/email/send';

type SubmitInquiryResult =
  | { success: true }
  | { success: false; errors?: Record<string, string[]>; error?: string };

export async function submitInquiry(
  data: InquiryInput
): Promise<SubmitInquiryResult> {
  try {
    // Validate input with Zod
    const validationResult = inquirySchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const validatedData = validationResult.data;

    // Insert into Supabase
    const { error: dbError } = await supabaseAdmin
      .from('inquiries')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        event_type: validatedData.event_type,
        event_date: validatedData.event_date,
        guest_count: validatedData.guest_count || null,
        message: validatedData.message || null,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      return {
        success: false,
        error: 'db',
      };
    }

    // Send email notification
    // Continue on email failure (inquiry is already saved)
    try {
      await sendInquiryEmail(validatedData);
    } catch (emailError) {
      console.error('Email error (inquiry saved successfully):', emailError);
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error in submitInquiry:', error);
    return {
      success: false,
      error: 'unexpected',
    };
  }
}
