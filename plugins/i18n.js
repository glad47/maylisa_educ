import en from '../lang/en-US.js' //english
import ar from '../lang/ar-AR.js' //arabic

export default {
    locales: [
        {
          name: 'العربية',
          code: 'ar',
          iso: 'ar-AR',
          file: 'ar-AR.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      defaultLocale: 'ar',
    vueI18n: {
        fallbackLocale: 'ar',
        messages: { ar, en }
    }
}
