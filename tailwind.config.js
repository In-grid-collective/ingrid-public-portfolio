module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/content/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'pixelify': ['Pixelify', 'sans-serif'],
        'Test':['B21-Regular', 'sans-serif'],
        'Test2':['Anthony', 'sans-serif'],
        'Test3':['Garamondt-Regular', 'sans-serif'],
        'main':['Kreon-Regular', 'sans-serif'],
      },
        colors:{
            // You can configure your colors here
            'primary':'#6623f3',
            'grey1':'#bbcad2',
            'grey2':'#d3d1d6',
            'secondary':'#b7fb4f'
        },
        animation: {
          marquee: "marquee 50s linear infinite"
        },
        keyframes: {
          marquee: {
            from: {
              transform: 'translateX(0)',
            },
            to: {
              transform: 'translateX(calc(-100% - 2.5rem))',
            },
          },
        },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
