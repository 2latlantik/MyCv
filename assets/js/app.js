import _ from 'lodash';


import '../css/app.scss';

import img from '../img/profil.jpg';

//import $ from 'jquery';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap');

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});