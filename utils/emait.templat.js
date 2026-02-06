export const emailTemplate = (userName, subscriptionName, amount, renewalDate) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subscription Reminder</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
                
                <!-- Header -->
                <div style="background-color: #2563eb; color: white; padding: 30px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">Subscription Reminder</h1>
                </div>

                <!-- Content -->
                <div style="padding: 30px;">
                    <p style="color: #333; font-size: 16px; line-height: 1.6;">
                        Hi <strong>${userName}</strong>,
                    </p>
                    
                    <p style="color: #555; font-size: 14px; line-height: 1.8;">
                        Your subscription is about to renew soon. Here are the details:
                    </p>

                    <!-- Details Box -->
                    <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; border-radius: 4px;">
                        <p style="margin: 10px 0; color: #333;">
                            <strong>Subscription:</strong> ${subscriptionName}
                        </p>
                        <p style="margin: 10px 0; color: #333;">
                            <strong>Amount:</strong> $${amount}
                        </p>
                        <p style="margin: 10px 0; color: #333;">
                            <strong>Renewal Date:</strong> ${renewalDate}
                        </p>
                    </div>

                    <!-- CTA Button -->
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="#" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">
                            Manage Subscription
                        </a>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; color: #666; font-size: 12px;">
                        © 2024 Subscription Tracker. All rights reserved.
                    </p>
                </div>

            </div>
        </body>
        </html>
    `;
};