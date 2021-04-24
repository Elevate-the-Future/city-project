module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'hero-image': "url('/src/assets/images/cupertino.jpg')",
         })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],

  }

  