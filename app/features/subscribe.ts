import { json } from 'remix';

import { axiosConvertKitClient } from '~/libs/axios';
import { getEnvServer, sleep } from '~/utils';

import type { ActionFunction } from 'remix';

export const actionSubscribe: ActionFunction = async ({ request }) => {
  try {
    await sleep(1);

    const form = await request.formData();

    const email = form.get('email');
    const firstName = form.get('firstName');

    // Check proper texts
    if (typeof email !== 'string' || typeof firstName !== 'string') {
      return json({
        error: true,
        message: 'Sorry, please provide proper name and email.',
      });
    }

    // Check existence
    if (!email && !firstName) {
      return json({
        error: true,
        message: 'Sorry, please provide name and email.',
      });
    }

    // Submit to API
    const data = await subscribeToConvertKit({ email, firstName });

    // Check response
    if (!data.subscription) {
      return json({
        error: true,
        message: data,
      });
    }

    // Return success
    return json({
      success: true,
      firstName,
      email,
      message: `Thank you ${firstName}, ${email} is subscribed! Please check your inbox.`,
      ...data,
    });
  } catch (error) {
    return json({
      error: true,
      message: 'Sorry, failed for unknown reason.',
    });
  }
};

interface SubscribeToConvertKitProps {
  email: string;
  firstName: string;
}

const subscribeToConvertKit = async ({
  email,
  firstName,
}: SubscribeToConvertKitProps) => {
  try {
    const apiKey = getEnvServer('CONVERTKIT_API_KEY');

    const response = await axiosConvertKitClient.post('/subscribe', {
      api_key: apiKey,
      email,
      first_name: firstName,
      tags: [3096588], // use tag id (not the name)
    });

    return response.data;
  } catch (error: any) {
    console.error(error.response.status, error.response.data);
    return error.response.data[0];
  }
};
