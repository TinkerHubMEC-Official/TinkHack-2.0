                  import localFont from 'next/font/local';
                import './globals.css';
                import AOSInit from '@/utils/AOSInit';
                import 'aos/dist/aos.css';


                // const satoshi = localFont({
                //   src: [
                //     {
                //       path: "./fonts/Satoshi-Variable.ttf",
                //       style: 'normal',
                //     },
                //   ],
                //   src: [
                //     {
                //       path: "./fonts/Satoshi-VariableItalic.ttf",
                //       style: 'italic',
                //     },
                //   ],
                //   variable: "--font-satoshi",
                // });

                const satoshi = localFont({
                  src: "./fonts/Satoshi-Variable.ttf",
                  variable: "--font-satoshi"
                })

                const khuja = localFont({
                  src: "./fonts/KhujaUppercase-Uppercase.ttf",
                  variable: "--font-khuja"
                })

                const productsansregular = localFont({
                  src: "./fonts/Product-Sans-Regular.ttf",
                  variable: "--font-product-sans-regular"
                })

                const productsansbold = localFont({
                  src: "./fonts/Product-Sans-Bold.ttf",
                  variable: "--font-product-sans-bold"
                })

                const latohairline = localFont({
                  src: "./fonts/Lato-Hairline.ttf",
                  variable: "--font-lato-hairline"
                })

                const latolight = localFont({
                  src: "./fonts/Lato-Light.ttf",
                  variable: "--font-lato-light"
                })

                const latothin = localFont({
                  src: "./fonts/Lato-Thin.ttf",
                  variable: "--font-lato-thin"
                })

                const candycolouredclown = localFont({
                  src: "./fonts/CandyColouredClown.ttf",
                  variable: "--font-candycolouredclown"
                })

                const MontserratBold = localFont({
                  src: "./fonts/Montserrat-Bold.ttf",
                  variable: "--font-MontserratBold"
                })
                
                const MontserratLight = localFont({
                  src: "./fonts/Montserrat-Light.ttf",
                  variable: "--font-MontserratLight"
                }) 
                
                const MontserratMedium = localFont({
                  src: "./fonts/Montserrat-Medium.ttf",
                  variable: "--font-MontserratMedium"
                }) 
                
                const MontserratRegular = localFont({
                  src: "./fonts/Montserrat-Regular.ttf",
                  variable: "--font-MontserratRegular"
                }) 
                
                const MontserratSemiBold = localFont({
                  src: "./fonts/Montserrat-SemiBold.ttf",
                  variable: "--font-MontserratSemiBold"
                }) 
                
                const MontserratThin = localFont({
                  src: "./fonts/Montserrat-Thin.ttf",
                  variable: "--font-MontserratThin"
                })

                export default function RootLayout({ children }) {
                  return (
                    <html lang="en" className={`${satoshi.variable} 
                                                ${khuja.variable} 
                                                ${productsansregular.variable} 
                                                ${productsansbold.variable}
                                                ${latohairline.variable} 
                                                ${latolight.variable} 
                                                ${latothin.variable} 
                                                ${candycolouredclown.variable}
                                                ${MontserratBold.variable} 
                                                ${MontserratLight.variable} 
                                                ${MontserratMedium.variable} 
                                                ${MontserratRegular.variable} 
                                                ${MontserratSemiBold.variable} 
                                                ${MontserratThin.variable}  
                                                `}>
                      <head>
                        <link rel="icon" href="/TinkHackLogo.png" type="image/svg+xml" style={{ width: '300px', height: '300px', margin: '-50px' }} />
                      </head>
                      <body className=''>
                        <AOSInit />
                        {children}
                      </body>
                    </html>
                  );
                }
