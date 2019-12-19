# Project 4 #
## By: Gerald Walden ##

__Production URL:__  https://p4.geraldbrentwalden.me

__Improvements based on P3 peer review feedback__

I received several good items of feedback; many of them such as the need to reorganize the pages into a 'pages' folder, I had avoided out of fear of 'breaking' something before I was ready. I have now gone back and reorganized the pages as suggested, also changing some component names to more accurately reflect their purpose. I also created a 'config' file (app.js) following the practice shown in lecture. Also, I have cleaned out some commented code, added a better title to the HTML,  and added a page header above the nav bar. In sum, there were many suggestions related to bringing the code more in line with the best practices demonstrated in the class, and I have tried to adhere more closely to those standards this time around.

I have had to leave the `Favorites.js` file in the __Components__ folder -- for some reason I was not able to get the app to recognize the Favorites constructor method as a constructor if it was placed in the __src__ folder; it does work as long as the import path is `./Favorites` (i.e. in the same directory as the importing Component) but not if the relative path is anything else even if it should be correct. Had I a bit more time I would track down the reason for this, but for now I have had to leave the file where it is. I'm sure it is something obvious that I have just overlooked.  


__Outside resources__
Other than class materials and information posted by fellow students and the instructor, I only used the Vue.js official documentation. 

__Notes for instructor__
I did not implement write functionality, but I did create a 'mailing list' form that could serve to display the form-validation aspects of the project.

I notice that the Mailing List form can be submitted if one clicks "submit" after loading the page, but without editing any of the input fields (which seems to be the point at which the validation is triggered). I didn't find a Vuelidate-specific measure to address this. 


