import React from 'react'

function zomatosearchbarcopy() {

    
    return (
        <div id="search_main_container" class="full_search  ">
    <div id="search_bar_wrapper" class="search_bar search-zindex" role="form">
        <div class="search_type flex-shrink-0">
            <div id="location_contianer">
                <div id="location_pretext">
                    <div class="l-pre-1" role="link" aria-label="Please type a location..." aria-describedby="location_input_sp" tabindex="0" aria-flowto="explore-location-suggest" data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="location_input">
                        <span class="location_placeholder ml5">
                                                            <i class="location arrow icon tiny pr2"></i>
                                                    </span>
                        <span id="location_input_sp" class="location_input_sp mr5">Bengaluru</span>
                        <span class="right location-dropdown"><i class="ui icon tiny caret down left"></i></span>
                    </div>
                    <div class="l-pre-2 hidden">
                        <span class="location_placeholder ml5">
                                                            <i class="location arrow icon tiny pr2"></i>
                                                        <label class="hdn" id="label_search_location">Please type a location...</label>
                            <input id="location_input" role="combobox" aria-labelledby="label_search_location" aria-expanded="true" aria-autocomplete="list" aria-owns="explore-location-suggest" placeholder="Please type a location..." autocomplete="off">
                        </span>
                    </div>
                </div>

                <!-- Location drop down starts   -->
                <div role="listbox" id="explore-location-suggest" class="homepage suggest-box start-steps clearfix">
                    <div id="location-all" class="item" data-entity_type="city" data-entity_id="4">All of Bengaluru</div>
                    <ul id="location-recent" role="presentation">
                        <li class="label ttupper">Recent Locations</li>
                    </ul>
                    <ul id="location-popular" role="presentation">
                        <li class="label ttupper">Popular Locations</li>
                        <li class="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5401">Whitefield, Bangalore</li><li class="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5009">BTM, Bangalore</li><li class="item grey-text" role="option" data-entity_type="subzone" data-entity_id="5404">Marathahalli, Bangalore</li>                    </ul>
                    <ul id="location-suggestion-container" role="presentation"></ul>
                </div>

                <!-- Location dro down ends   -->
            </div>
        </div>
        <div class="flex-shrink-1 search-box plr0i ml5 mr5">
            <div id="keywords_container" class="col-s-16 pr0" data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="keywords_input">
                <div id="keywords_pretext">
                    <div class="k-pre-1 hidden" style="overflow:hidden;">
                        <span class="search-bar-icon mr5">
                            <i class="search icon tiny"></i>
                        </span>

                        <div class="keyword_placeholder nowrap">
                            <div class="keyword_div">Search for restaurants or cuisines...</div>
                        </div>
                    </div>
                    <div class="k-pre-2  w100">
                        <span class="search-bar-icon mr5"><i class="search icon tiny"></i></span>
                        <label id="label_search_res" class="hdn">Search for restaurants or cuisines...</label>
                        <input role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="keywords-by" aria-labelledby="label_search_res" id="keywords_input" class="discover-search" placeholder="Search for restaurants or cuisines..." autocomplete="off">
                    </div>
                </div>
                <!-- keywords dro down starts   -->
                <div id="explore-keywords-dropdown" class="homepage ">
                    <div id="keywords-dd">
                        <ul id="keywords-by" role="listbox">
                        </ul>
                    </div>
                    <div class="keyword-search-start start-steps clearfix">
                        <div class="search-screen-block hidden">
                            <div class="ui inverted dimmer screen-block-loader">
                                <div class="ui text loader">Coming right up...</div>
                            </div>
                        </div>

                        <ul id="no-results" class="hidden">
                            <li class="item no-result-found">
                                <a class="item">
                                    <div class="keywords-dd-l">No results found</div>
                                </a>
                            </li>
                        </ul>
                        <div class="popular-searches show">
                        <ul id="popular-results" data-entity-id="4" data-entity-type="city">
                                <li class="label">Trending Searches</li>
                            <li class="item-row"><span class="item" data-item_type="chain" data-item_id="50574" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;chain=50574">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="KFC"></span>	                                                        <span class="nowrap">KFC</span>	                                                    </span>	                                                </div>	                                            </span><span class="item" data-item_type="dish_v2" data-item_id="87291" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;dishv2_id=87291">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Cake"></span>	                                                        <span class="nowrap">Cake</span>	                                                    </span>	                                                </div>	                                            </span></li><li class="item-row"><span class="item" data-item_type="cuisine" data-item_id="7" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;cuisine=7">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Biryani"></span>	                                                        <span class="nowrap">Biryani</span>	                                                    </span>	                                                </div>	                                            </span><span class="item" data-item_type="chain" data-item_id="50382" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;chain=50382">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Dominos"></span>	                                                        <span class="nowrap">Dominos</span>	                                                    </span>	                                                </div>	                                            </span></li><li class="item-row"><span class="item" data-item_type="chain" data-item_id="50471" data-item_redirect="https://www.zomato.com/index.php?city=4&amp;chain=50471">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Empire Restaurant"></span>	                                                        <span class="nowrap">Empire Restaurant</span>	                                                    </span>	                                                </div>	                                            </span><span class="item" data-item_type="restaurant" data-item_id="18353097" data-item_redirect="https://www.zomato.com/bangalore/slug-nagawara">	                                                <div>	                                                    <span class="start-step-label">	                                                        <span class="trending-icon"><img class="ui middle aligned pr5 micro image" src="https://b.zmtcdn.com/images/trending_icon.svg" alt="Slug"></span>	                                                        <span class="nowrap">Slug</span>	                                                    </span>	                                                </div>	                                            </span></li></ul>
                        </div>
                                                                            <ul id="explore-by">
                                <li class="label">Suggested Searches</li>
                                
                                <li class="item" data-item_type="cat" data-item_id="1">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Delivery">
                                        <span>Delivery</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="13">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_13.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Pocket-Friendly Delivery">
                                        <span>Pocket-Friendly Delivery</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="8">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_8.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Breakfast">
                                        <span>Breakfast</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="9">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Lunch">
                                        <span>Lunch</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="10">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_10.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Dinner">
                                        <span>Dinner</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="3">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Drinks &amp; Nightlife">
                                        <span>Drinks &amp; Nightlife</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="cat" data-item_id="6">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/category_6.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Cafés">
                                        <span>Cafés</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="specials" data-item_id="14">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Buffet Places">
                                        <span>Buffet Places</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="specials" data-item_id="13">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_13.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="North Indian">
                                        <span>North Indian</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="specials" data-item_id="31">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_31.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Chinese">
                                        <span>Chinese</span>
                                    </div>
                                </li>
                                
                                <li class="item" data-item_type="specials" data-item_id="10">
                                    <div class="start-step-label">
                                        <img class="ui middle aligned pr5 micro image search-drop-down-lazy" data-original="https://b.zmtcdn.com/images/search_tokens/app_icons/special_10.png?fit=around%7C88%3A88&amp;crop=88%3A88%3B%2A%2C%2A" src="https://b.zmtcdn.com/images/pixel.gif" alt="Desserts &amp; Bakes">
                                        <span>Desserts &amp; Bakes</span>
                                    </div>
                                </li>
                                                            </ul>
                                            </div>
                </div>

                <!-- keywords dro down ends   -->
            </div>
        </div>
        <div class="flex-shrink-0 plr0i">
            <div role="button" tabindex="0" id="search_button" class="left ui red button" data-homepage_ui_tracking_active="" data-homepage_ui_tracking_element_group="main_search_container" data-homepage_ui_tracking_element_id="search_button">
                Search            </div>
        </div>

        <div class="clear"></div>
    </div>
    <form id="search-keyword" method="GET" action="https://www.zomato.com/index.php" class="hidden">
        <input type="hidden" name="category" id="category" value="0">
        <input type="hidden" name="tokens" id="selected-tokens" value="">
        <input type="hidden" name="special" id="special" value="0">
        <input type="hidden" name="cuisine" id="cuisine" value="0">
        <input type="hidden" name="city" id="city" value="4">
        <input type="hidden" name="subzone" id="subzone" value="">
        <input type="hidden" name="zone" id="zone" value="">
        <input type="hidden" name="landmark" id="landmark" value="">
        <input type="hidden" name="near-me" id="near_me" value="">
        <input type="hidden" name="zipcode" id="zipcode" value="">
        <input type="hidden" name="zipcode_area" id="zipcode_area" value="">
        <input type="hidden" name="group" id="group" value="">
        <input type="hidden" name="street" id="street" value="">
        <input type="hidden" name="entity_type" id="form_entity_type" value="city">
        <input type="hidden" name="entity_id" id="form_entity_id" value="4">
        <input type="hidden" name="order-online" id="online-ordering" value=""/>
        <input type="hidden" name="q" id="keywords_query" value=""/>
        <input type="hidden" name="place_id" id="place_id" value=""/>
        <input type="hidden" name="table_booking" id="tr-header-input" value=""/>
    </form>
</div>
    )
}



export default zomatosearchbarcopy
