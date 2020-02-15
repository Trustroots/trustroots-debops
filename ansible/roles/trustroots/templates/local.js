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
}