## meteor-identicon

Client-side [identicon](http://en.wikipedia.org/wiki/Identicon) generation for [Meteor](http://meteor.com) using a 3 color variation of 
[blockies](https://github.com/alexvandesande/blockies).

## Usage

Add package to your project:

```console
meteor add alexvandesande:identicon
```

Now you can use `identicon` helper in your templates:

```handlebars
<img src="{{identicon 'seed'}}"></img>
```

You can pass options to [blockies](https://github.com/alexvandesande/blockies) like this:

```handlebars
<img src="{{identicon 'seed' size=15 scale=3}}"></img>
```

## License

The MIT License (MIT)
