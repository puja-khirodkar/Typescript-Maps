# Typescript-Maps

## Creating an app with Google Maps

This is a basic project written in TypeScript which shows Marker at User location and Company location in the Map as shown in picture below.
![](https://i.imgur.com/e4DpYiz.png)

## Live Demo

You can view the [Live Demo](https://puja-khirodkar.github.io/Typescript-Maps/)

1. Install the bundler with npm as:

```
npm install -g parcel-bundler
```

2. Add new folder

```
mkdir Maps
cd mkdir
```

3. Create a index.html file with basic script loading as

```
<html>
  <body>
    <script src="./src/index.ts"></script>
  </body>
</html>

```

5. Make src folder

```
mkdir src
cd src/
```

6. Create index.ts file. Just for testing let's add console msg. This file will be modified further to have some utility for Maps.

```
console.log('hi there!');
```

7. Run the code with Parcel

```
cd ../
parcel index.html
```

This was a very basic setup.

8. Now let's create User class file as `User.ts` under src with some basic info.

```
class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}
```

9. Let's generate some random data by using Faker package in "http://npmjs.com". Search for Faker.
10. Install Faker package with type definition files on your local

```
npm install @types/faker
```

#### NOTE:

Remember, if you just install as:

```
npm install faker
```

It may not include the type definition files which will show warning in the import statement for faker.

- Add the files User.ts and Company.ts and initialize using `faker` library.
- Modify index.ts as in the code.

10. In order to use Google Maps API, we need to follow the steps as:
    a . Generate a Google Developer Project at [Google Dev Console](https://console.developers.google.com/)
    b. Enable Google Maps support inside the project
    c. Generate API key

11. Add the google maps script tag with generated key to our `index.html` file.

### NOTE: The code in Master branch is using only `Classes`. We can make it better by introducing `Interface`.

## Using Interface, we can make our application less tightly coupled. To refer to the implementation of this approach, please use branch `Interface`. `Interface` branch has implemented `Info tags` on onClick event of Markers.
