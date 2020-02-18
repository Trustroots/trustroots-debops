module.exports = {
  https: true,
  domain: '{{ trustroots__fqdn }}',
  mailer: {
    from: 'trustroots@localhost',
    options: {
      host: '127.0.0.1',
      port: 1025,
      ignoreTLS: true,
      auth: false,
    },
  },
  sentry: {
    enabled: true,
    options: {
      dsn: 'https://d4b8faee4ba345d09c8fb9fe0cc377f1@sentry.io/2578533',
    },
  },
  db: {
    uri: 'mongodb://localhost/trustroots',
    options: {
      auth: {
        authMechanism: '',
      },
    },
    debug: false,
    autoIndex: true,
    checkCompatibility: false,
  },
}
