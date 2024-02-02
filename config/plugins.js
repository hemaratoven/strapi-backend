module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: "strapi-provider-cloudflare-r2",
        providerOptions: {
          accessKeyId: env("CF_ACCESS_KEY_ID"),
          secretAccessKey: env("CF_ACCESS_SECRET"),
          /**
           * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
           */
          endpoint: env("CF_ENDPOINT"),
          params: {
            Bucket: env("CF_BUCKET"),
          },
          /**
           * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
           * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
           * This option is required to upload files larger than 5MB, and is highly recommended to be set.
           * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
           */
          cloudflarePublicAccessUrl: env("CF_PUBLIC_ACCESS_URL"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        // provider: 'mailgun',
        // providerOptions: {
        //   key: env('MAILGUN_API_KEY'), // Required
        //   domain: env('MAILGUN_DOMAIN'), // Required
        //   url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
        // },
        // settings: {
        //   defaultFrom: 'postmaster@affix-tech.com',
        //   defaultReplyTo: 'postmaster@affix-tech.com',
        //   testAddress: env("EMAIL_TEST_ADDRESS"),
        // },


        // provider: 'nodemailer',
        // providerOptions: {
        //   host: env('SMTP_HOST', 'smtp.sendgrid.net'),
        //   port: env('SMTP_PORT', 465),
        //   auth: {
        //     user: env('SMTP_USERNAME'),
        //     pass: env('SMTP_PASSWORD'),
        //   },
        // },
        // settings: {
        //   defaultFrom: 'admin@affix-tech.com', 
        //   defaultReplyTo: 'support.th@affix-tech.com',
        // },

        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'admin@affix-tech.com',
          defaultReplyTo: 'admin@affix-tech.com',
        },
      },
    },
    // ...
  });