# Simple E-Commerce Application

## Foundation:
- Ask to allow notification on the first time that the app opens. ✅
- Build two bottom tabs - ✅
- Build API loader - ✅
- Build API error toast - ✅

## The screens
- Home, Display a list of products, You can use multiple widgets to display products by categories - ✅
- Product Detail, Display main product information, Including Product photos , Price, Description, etc - ✅
- Profile, User Profile where user can toggle RTL, Enable notification, Enable location, Manage Addresses
Cart, Basic Cart implementation. With features like add to cart, edit cart. No need for APIs or checkout page - ✅


### Home Screen
-  Build product listing screen - ✅
-  Build pull to refresh - ✅
-  Build infinite scrolling with loading more products - ✅
-  Other notes:
>> - Cart button is visible here. Once user pressed the button, he will be taken to the shopping cart screen.
>> - Cart button badge that contains all the total amount of items (`item * quantity`).
>> - User can also add items using the home page. I added an add to cart button in every listing.
>> - To be able to see the error toast, try to disable your network connection and it will start to show along with a empty screen component.
>> - Once on the error state, try to enable your network and do a pull to refresh or press the OK link in the toast to see it working.

### Product Details  Screen
- Build product detail screen - ✅
- Open a deeplink from outside the app will open the app and redirect user to product detail screen - 🛑: *didn't have a time to add this.*
- **Other notes**:
>> - Cart button is visible here. Once user pressed the button, he will be taken to the shopping cart screen.
>> - On this sample, I initially created the page using route params from the `useRoute` hook. On click of an item in the home page, i pass the listing object as route params where it will be consumed on the products page. I am planning to do a proper fetching using only `id` (which i recommend) but for simplicity, i proceeded with the initial approach.


### Shopping Cart Screen
- Implement Add to cart - ✅
- Build Cart detail screen - ✅
- **Other notes**:
>> - User can use `+`/`-` button to add/reduce the quanitity of every item.
>> - In case there is only one item, `trash` icon will show instead of the `-` button icon.
>> - User can delete an item.
>> - On bottom part of the screen, the total quantities of item can be seen in the `subtotal`. used `Array.prototype.reduce()` to get the sum.
>> - On bottom part of the screen, the amount to be paid are computed based on `amount * quantity`.  used `Array.prototype.reduce()` to get the sum.


### Profile Screem
- There are 4 buttons in profile screen - toggle rtl & enable notification & enable location & addresses - ✅
- RTL Toggle - ✅
- Enable notification and location button will lead user to the permission setting screen in your phone  - ✅
- **Other notes**:
>>> - For the profile, i fetched the values from `/users/6` endpoint. i just needed a one user for the demo sake.
>>> - For the map I used google reverse `geocode API` where i provide the `latitude`, `longitude`  and the `API key`. I used my personal API key for this. :)
>>> - Map is better to be used in the actual device so that you can zoom in/out by pinching on the map.
>>> - I used a bottom sheet to show the map. Map will be initially centered in your current location.
>>> - On every change of the map location, it will hit the reverse geocode API and then will get the `formatted_address` from the response where it will be shown on the bottom of the map.
>>> - Switching to RTL is handled by the language section (as a real life example). The app has capability of switching its direction without restarting the app. To achieve this, i utilized the Context Provider API and a hook. I created `AppDirectionProvider` component. It serves a provider where it stores two important values like `isRtl` & `directionStyles`. `isRtl` is a flag whether the app is in RTL or LTR mode. The `directionStyles` is an object where it contains either RTL or LTR styles. and based on the direction it selects the style from the declared variable called `rtlStyles` & `rtlStyles`. On the same `AppDirectionProvider` file, you wil see a hook called `useSiteDirection` where it returns the value of the  `SiteDirectionContext` context.


### Location
- Addresses button will lead to address listing screen with add address button - ✅
- Add address button will lead to map view screen, and ask user to allow location fist time - ✅
- In map view screen, default address will be user's current location, and user can change location through a pin which is in the center of the screen - ✅
- After user add address in map view, the address will be reflected in address listing screen - ✅

## Stack
- Use @react-navigation - ✅
- Use @reduxjs/toolkit - ✅
- Use Expo - ✅
- Use typescript - ✅
- Use https://fakestoreapi.com/ - ✅

## About the Application

### Store:
- I used @reduxjs/toolkit here as part of the requirements. Although even if it will not be required i'd still use this since it has an opinionated way of building your state management.
- I divided the app into slices :
> - `cart` - All the items added to cart that contains the count and total price for all of the items. user can add/reduce quantity and remove an item.
> - `environment` - contains environment related properties like language where it can be used as a driver for the translations
> - `listings` - all the listings.
> - `user` - information about the user. On this sample i didn't use any asyncStorage to persist information to make it easier to check and simulate the location / flow.
- For the slices I created a generic interface called `SliceState`. This is a simple pattern which is very easy to understand. Slices that extended this interface will have a common props like:
> - `data` - any data, it can be an object or an array of object.
> - `error` - any error in case.
> - `status` - has a type of `RequestStatus` which is derived from an enum.

### Constants / Theming
- I created a folder called constants where it contains static values.
- I created an enum for the `Font`, and `Colors` where i use it vastly for all color related values. This adds more control for me in case i need to change any of the fonts or colors

### Helpers
- Under `helpers folder`, you will see the `location` and `notification` helpers. For once, I thought of adding them to hooks but since they don't access any part of the store or use a hook, i kept them here since it will be straight forward to use them.
- The helper function consists of functions that are dependent on some npm packages. I put them here to add a layer of abstraction in case i need to change them with something else and the implementation on the templates won't be affected.

### Hooks
- `useCachedResources` - caches the resources like fonts and other media file (if any.)
- `useLanguage` - hook that manages the language. In case there will be translations related functionality, this is the supposedly place for it.

### Other
- lint the app by `yarn lint`
- apply and fix thel inting to the fixable parts `yarn prettify`
