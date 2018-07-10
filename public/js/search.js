var client = algoliasearch("6B0IN3VMID", "e334f6c175bbfd35554c5b4bb66bc255");
var index = client.initIndex('GigSchema');
//initialize autocomplete on search input (ID selector must match)
autocomplete('#aa-search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'name',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<a href="/service_detail/' + suggestion.objectID + '"><span>' +
            suggestion._highlightResult.title.value + '</span></a>';
        }
    }
});
