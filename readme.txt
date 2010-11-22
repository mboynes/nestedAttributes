Simple jQuery plugin for working with nested attributes in rails apps
call this on a 'wrapper' element with a plural id, e.g. "#items",
which has duplicatable child elements with a singular class, e.g. ".item"
Sample HTML structure: <ul id="items"><li class="item" />...<li class="item" /></ul>

Takes optional setting 'singular' if your parent element isn't singularizable by removing an 's'

A minor extension to Ryan Bates' and Tim Riley's "Complex Forms Example", found here: https://github.com/timriley/complex-form-examples/
Thanks to both of them for being awesome.