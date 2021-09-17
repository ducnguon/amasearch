<?php
namespace AmagumoLabs\wprestapifilter\Shortcodes;
use AmagumoLabs\wprestapifilter\Plugin;
use AmagumoLabs\wprestapifilter\Helpers;

class Team_Shortcode extends Plugin
{

  public function __construct() {

    if ( ! shortcode_exists( 'team_search' ) ) {
        add_shortcode( 'team_search', array( $this, 'team_search_shortcode' ) );
    }

    add_action('rest_api_init', array( $this, 'wraf_register_rest_fields' ));

    $this->setup_ajax_handlers();
  }


  public function wraf_register_rest_fields() {
      register_rest_field('employees',
          'employees_position',
          array(
              'get_callback'    => array( $this, 'employees_position_func' ),
              'update_callback' => null,
              'schema'          => null
          )
      );
      register_rest_field('employees',
          'employees_desc',
          array(
              'get_callback'    => array( $this, 'employees_desc_func' ),
              'update_callback' => null,
              'schema'          => null
          )
      );
      register_rest_field('employees',
          'employees_order',
          array(
              'get_callback'    => array( $this, 'employees_order_func' ),
              'update_callback' => null,
              'schema'          => null
          )
      );
      register_rest_field('employees',
          'employees_image_src',
          array(
              'get_callback'    => array( $this, 'employees_tutorial_image' ),
              'update_callback' => null,
              'schema'          => null
          )
      );
  }

  function employees_position_func($object,$field_name,$request){
    $terms_result = "";
    $term = get_post_meta($object['id'] , '_position', true);
    $term != null ? $terms_result = $term : $terms_result = "coming soon";
    return $terms_result;
  }

  function employees_tutorial_image($object,$field_name,$request) {
    $img = wp_get_attachment_image_src($object['featured_media'],'medium');
    return $img[0];
  }

  function employees_desc_func($object,$field_name,$request){
    $content = strip_tags(str_replace(']]>', ']]&gt;', apply_filters('the_content', get_post_meta($object['id'] , '_desc', true))));
    return $content;
  }

  function employees_order_func($object,$field_name,$request) {
  		$parameters = $request->get_query_params();

    	$employees_category = $parameters['filter']['employees_category'];

      $order = 8;
      //Arbitration
      if($employees_category == "arbitration") {
        if($object["slug"] == "k-minh-dang") {
          $order = 0;
        } else if($object["slug"] == "truong-trong-nghia") {
          $order = 1;
        } else if($object["slug"] == "luu-tien-dzung") {
          $order = 2;
        } else if($object["slug"] == "diep-hoai-nam") {
          $order = 3;
        } else if($object["slug"] == "nguyen-khoi-do") {
          $order = 4;
        } else if($object["slug"] == "nguyen-hong-ha") {
          $order = 5;
        } else if($object["slug"] == "phuong-tran") {
          $order = 6;
        } else if($object["slug"] == "pham-minh-thang") {
          $order = 7;
        } else if($object["slug"] == "ngo-minh-hung") {
          $order = 8;
        }
      } else if($employees_category == "banking-finance") {
      	 if($object["slug"] == "truong-nhat-quang") {
          $order = 0;
        } else if($object["slug"] == "duong-thu-ha") {
          $order = 1;
        } else if($object["slug"] == "vu-dzung") {
          $order = 2;
        } else if($object["slug"] == "eli-mazur") {
          $order = 4;
        } else if($object["slug"] == "hyun-s-kim") {
          $order = 3;
        } else if($object["slug"] == "phan-vinh-nhan") {
          $order = 5;
        } else if($object["slug"] == "nguyen-thu-hang") {
          $order = 6;
        } else if($object["slug"] == "vu-dieu-huyen") {
          $order = 7;
        } else if($object["slug"] == "pham-minh-thang") {
          $order = 8;
        } else if($object["slug"] == "phuong-tran") {
          $order = 9;
        } else if($object["slug"] == "nguyen-van-hai") {
          $order = 10;
        } else if($object["slug"] == "nguyen-nam-hung") {
          $order = 11;
        } else if($object["slug"] == "john-davis") {
          $order = 12;
        } else if($object["slug"] == "huynh-thong") {
          $order = 13;
        } else if($object["slug"] == "vu-mai-tram") {
          $order = 14;
        }
      } else if($employees_category == "capital-markets") {
      	 if($object["slug"] == "truong-nhat-quang") {
          $order = 0;
        } else if($object["slug"] == "duong-thu-ha") {
          $order = 1;
        } else if($object["slug"] == "vu-dzung") {
          $order = 2;
        } else if($object["slug"] == "nguyen-ngoc-bich-tram") {
          $order = 4;
        } else if($object["slug"] == "hyun-s-kim") {
          $order = 3;
        } else if($object["slug"] == "nguyen-thu-hang") {
          $order = 5;
        } else if($object["slug"] == "nguyen-van-hai") {
          $order = 6;
        } else if($object["slug"] == "nguyen-nam-hung") {
          $order = 7;
        } else if($object["slug"] == "tran-dieu-huong") {
          $order = 8;
        } else if($object["slug"] == "john-davis") {
          $order = 9;
        } else if($object["slug"] == "ho-anh-tuyet") {
          $order = 10;
        } else if($object["slug"] == "krissen-pillay") {
          $order = 11;
        }
      } else if($employees_category == "corporate") {
      	 if($object["slug"] == "diep-hoai-nam") {
          $order = 0;
	        } else if($object["slug"] == "le-thi-loc") {
	          $order = 1;
	        } else if($object["slug"] == "eli-mazur") {
	          $order = 2;
	        } else if($object["slug"] == "phan-vinh-nhan") {
	          $order = 4;
	        } else if($object["slug"] == "nguyen-ngoc-bich-tram") {
	          $order = 5;
	        } else if($object["slug"] == "nguyen-thu-hang") {
	          $order = 6;
	        } else if($object["slug"] == "vu-dieu-huyen") {
	          $order = 7;
	        } else if($object["slug"] == "phuong-tran") {
	          $order = 8;
	        } else if($object["slug"] == "nguyen-van-hai") {
	          $order = 9;
	        } else if($object["slug"] == "nguyen-nam-hung") {
	          $order = 10;
	        } else if($object["slug"] == "tran-dieu-huong") {
	          $order = 11;
	        } else if($object["slug"] == "john-davis") {
	          $order = 12;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 13;
	        } else if($object["slug"] == "ho-anh-tuyet") {
	          $order = 14;
	        } else if($object["slug"] == "huynh-thong") {
	          $order = 15;
	        } else if($object["slug"] == "vu-mai-tram") {
	          $order = 16;
	        } else if($object["slug"] == "krissen-pillay") {
	          $order = 17;
	        }
        } else if($employees_category == "litigation") {
	      	 if($object["slug"] == "diep-hoai-nam") {
	          $order = 2;
	        } else if($object["slug"] == "truong-trong-nghia") {
	          $order = 0;
	        } else if($object["slug"] == "luu-tien-dzung") {
	          $order = 1;
	        } else if($object["slug"] == "nguyen-hong-ha") {
	          $order = 3;
	        } else if($object["slug"] == "phuong-tran") {
	          $order = 4;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 5;
	        }
      	} else if($employees_category == "mergers-acquisitions") {
	      	if($object["slug"] == "truong-nhat-quang") {
	          $order = 0;
	        } else if($object["slug"] == "k-minh-dang") {
	          $order = 1;
	        } else if($object["slug"] == "diep-hoai-nam") {
	          $order = 2;
	        } else if($object["slug"] == "duong-thu-ha") {
	          $order = 3;
	        } else if($object["slug"] == "vu-dzung") {
	          $order = 4;
	        } else if($object["slug"] == "eli-mazur") {
	          $order = 6;
	        } else if($object["slug"] == "le-thi-loc") {
	          $order = 5;
	        } else if($object["slug"] == "phan-vinh-nhan") {
	          $order = 7;
	        } else if($object["slug"] == "nguyen-ngoc-bich-tram") {
	          $order = 8;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 15;
	        } else if($object["slug"] == "nguyen-thu-hang") {
	          $order = 9;
	        } else if($object["slug"] == "vu-dieu-huyen") {
	          $order = 10;
	        } else if($object["slug"] == "pham-minh-thang") {
	          $order = 11;
	        } else if($object["slug"] == "phuong-tran") {
	          $order = 12;
	        } else if($object["slug"] == "nguyen-van-hai") {
	          $order = 13;
	        } else if($object["slug"] == "nguyen-nam-hung") {
	          $order = 14;
	        } else if($object["slug"] == "ho-anh-tuyet") {
	          $order = 16;
	        } else if($object["slug"] == "krissen-pillay") {
	          $order = 19;
	        } else if($object["slug"] == "huynh-thong") {
	          $order = 17;
	        } else if($object["slug"] == "vu-mai-tram") {
	          $order = 18;
	        }
        } else if($employees_category == "projects") {
	      	 if($object["slug"] == "truong-nhat-quang") {
	          $order = 0;
	        } else if($object["slug"] == "diep-hoai-nam") {
	          $order = 1;
	        } else if($object["slug"] == "duong-thu-ha") {
	          $order = 2;
	        } else if($object["slug"] == "vu-dzung") {
	          $order = 3;
	        } else if($object["slug"] == "eli-mazur") {
	          $order = 4;
	        } else if($object["slug"] == "hyun-s-kim") {
	          $order = 5;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 8;
	        } else if($object["slug"] == "vu-dieu-huyen") {
	          $order = 6;
	        } else if($object["slug"] == "nguyen-van-hai") {
	          $order = 7;
	        }
      	} else if($employees_category == "real-estate") {
	      	 if($object["slug"] == "k-minh-dang") {
	          $order = 0;
	        } else if($object["slug"] == "diep-hoai-nam") {
	          $order = 1;
	        } else if($object["slug"] == "le-thi-loc") {
	          $order = 2;
	        } else if($object["slug"] == "nguyen-ngoc-bich-tram") {
	          $order = 3;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 8;
	        } else if($object["slug"] == "pham-minh-thang") {
	          $order = 7;
	        } else if($object["slug"] == "phuong-tran") {
	          $order = 6;
	        } else if($object["slug"] == "nguyen-thu-hang") {
	          $order = 4;
	        } else if($object["slug"] == "nguyen-hong-ha") {
	          $order = 5;
	        }
      	} else {
      		if($object["slug"] == "truong-nhat-quang") {
	          $order = 0;
	        } else if($object["slug"] == "k-minh-dang") {
	          $order = 1;
	        } else if($object["slug"] == "diep-hoai-nam") {
	          $order = 2;
	        } else if($object["slug"] == "duong-thu-ha") {
	          $order = 3;
	        } else if($object["slug"] == "vu-dzung") {
	          $order = 4;
	        } else if($object["slug"] == "eli-mazur") {
	          $order = 6;
	        } else if($object["slug"] == "le-thi-loc") {
	          $order = 5;
	        } else if($object["slug"] == "phan-vinh-nhan") {
	          $order = 7;
	        } else if($object["slug"] == "nguyen-ngoc-bich-tram") {
	          $order = 8;
	        } else if($object["slug"] == "ngo-minh-hung") {
	          $order = 15;
	        } else if($object["slug"] == "nguyen-thu-hang") {
	          $order = 9;
	        } else if($object["slug"] == "vu-dieu-huyen") {
	          $order = 10;
	        } else if($object["slug"] == "pham-minh-thang") {
	          $order = 11;
	        } else if($object["slug"] == "phuong-tran") {
	          $order = 12;
	        } else if($object["slug"] == "nguyen-van-hai") {
	          $order = 13;
	        } else if($object["slug"] == "nguyen-nam-hung") {
	          $order = 14;
	        } else if($object["slug"] == "ho-anh-tuyet") {
	          $order = 16;
	        } else if($object["slug"] == "krissen-pillay") {
	          $order = 19;
	        } else if($object["slug"] == "huynh-thong") {
	          $order = 17;
	        } else if($object["slug"] == "vu-mai-tram") {
	          $order = 18;
	        } else {
	          $order = 19;
	        }
      	}

      // else if(in_array(7, $object["employees_category"])) {
      //   if($object["slug"] == "nguyen-van-hai") {
      //     $order = 7;
      //   } else if($object["slug"] == "john-davis") {
      //     $order = 8;
      //   } else if($object["slug"] == "nguyen-nam-hung") {
      //     $order = 9;
      //   } else if($object["slug"] == "pham-minh-thang") {
      //     $order = 10;
      //   } else if($object["slug"] == "phuong-tran") {
      //     $order = 11;
      //   } else if($object["slug"] == "vu-dieu-huyen") {
      //     $order = 12;
      //   } else {
      //     $order = 13;
      //   }
      // } else {
      //   if($object["slug"] == "vu-mai-tram") {
      //     $order = 14;
      //   } else if($object["slug"] == "huynh-thong") {
      //     $order = 15;
      //   } else {
      //     $order = 16;
      //   }
      // }
    return $order;
  }

  /**
    * Registers the callback functions
    *
    * Note: If this Ajax call was intended to be available to those who are not
    *    logged in, you would need to uncommend the 'wp_ajax_nopriv_clear_object_cache_ajax'
    *    hook.
    * @since 1.0.0
    */
    public function setup_ajax_handlers() {
      // responsible for providing a response when a taxonomy value is clicked from the dropdown.
      add_action( 'wp_ajax_nopriv_filter_team_by_taxonomy_ajax', array( $this, 'filter_team_by_taxonomy_ajax' )  );
      add_action( 'wp_ajax_filter_team_by_taxonomy_ajax', array( $this, 'filter_team_by_taxonomy_ajax' ) );
    }

  /**
    * Ajax handler for 'filter_team_by_taxonomy_ajax' call.
    * @since 1.0.0
    */
    public function filter_team_by_taxonomy_ajax() {

      $result = [ 'success' => true ];

      try {
        // self::$cache->flush();
      } catch ( Exception $e ) {
        $result = [ 'success' => false, 'message' => $e->getMessage() ];
      }

      echo json_encode( $result );
      wp_die();

    }

  /**
   * A short code that renders Search Layout, if provided
   *
   * @param $atts array Shortcode Attributes
   * @return string Output of shortcode
   * @since 1.0.0
   */
  public function team_search_shortcode( $atts ) {
    global $wp;

    if(ICL_LANGUAGE_CODE == 'en') {
      $atts = shortcode_atts( array(
        'posttype' => 'employees',
        'placeholder' => 'Keywords',
        'taxonomy' => 'employees_category',
        'filter' => '',
        'class' => ''
      ), $atts, 'team_search' );
    } else {
		  $atts = shortcode_atts( array(
        'posttype' => 'employees',
        'placeholder' => 'Từ khóa',
        'taxonomy' => 'employees_category',
        'filter' => '',
        'class' => ''
      ), $atts, 'team_search' );
    }
    //sprintf( __( 'Hello %s!', self::$textdomain ), $atts[ 'posttype' ] )

    if($atts[ 'filter' ] == "") {
      $terms = get_terms([
        'taxonomy' => $atts[ 'taxonomy' ],
        'hide_empty' => false
      ]);
      //print_r($terms);
      $term_options = '';
      foreach($terms as $term) {
        $term_options .= '<option value="'.$term->term_id.'" class="'.self::$textdomain.'-dropdown__list-item">'.$term->name.'</option>';
      }

      $html = '<div class="'.self::$textdomain.'-dropdown-wrapper">
                <select id="'.self::$textdomain.'-select-'.$atts[ 'posttype' ].'-'.$atts[ 'taxonomy' ].'" data-id="'.self::$textdomain.'-dropdown-'.$atts[ 'posttype' ].'-'.$atts[ 'taxonomy' ].'" class="'.self::$textdomain.'-select-dropdown '.$atts[ 'posttype' ].'" data-label="'.sprintf( __( '%s', self::$textdomain ), $atts[ 'placeholder' ] ).'" data-posttype="'.$atts[ 'posttype' ].'" data-taxonomy="'.$atts[ 'taxonomy' ].'">
                  '.$term_options.'
                </select>
              </div>';

      $html .= '<div id="'.self::$textdomain.'-result-'.$atts[ 'posttype' ].'-'.$atts[ 'taxonomy' ].'" class="'.self::$textdomain.'-result-wrapper " ></div>';
      return $html;
    } else if ($atts[ 'filter' ] == "level") {

      $terms_level_0 = get_terms([
        'taxonomy'    => $atts[ 'taxonomy' ],
        'parent'      => 0,
        'hide_empty'  => false
      ]);

      if (!empty($_GET['s'])) {
        $search_query = get_search_query();
      }

      $preloader = '<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>';

      $searchform = '<form data-rest-url="'.get_rest_url( null, 'wp/v2/' ).'" class="'.self::$textdomain.'-searchteam" method="get" id="'.self::$textdomain.'searchteam" action="' .home_url("/"). '">
      <label><span class="screen-reader-text">'.sprintf( __( '%s', self::$textdomain ), $atts[ 'placeholder' ] ).'</span><input type="search" class="search-field" placeholder="'.sprintf( __( '%s', self::$textdomain ), $atts[ 'placeholder' ] ).'" value="' . get_search_query() . '" name="a" title="'.sprintf( __( '%s', self::$textdomain ), $atts[ 'placeholder' ].":" ).'" /></label>
      <button type="button" data-posttype="'.$atts[ 'posttype' ].'" class="'.self::$textdomain.'-submit"><span class="screen-reader-text">Search</span><svg class="mk-svg-icon" data-name="mk-icon-search" data-cacheid="icon-5dedcecf221b9" style=" height:25px; width: 23.214285714286px; " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1792"><path d="M1152 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path></svg></button>
      </form>';

      $html = "";
      $html .= $searchform;
      foreach($terms_level_0 as $term) {
        $term_children = get_terms([
          'taxonomy'    => $atts[ 'taxonomy' ],
          'parent'      => $term->term_id,
          'hide_empty'  => false
        ]);

        $term_options = '';
        foreach($term_children as $term_child) {
          $term_options .= '<option value="'.$term_child->slug.'" class="'.self::$textdomain.'-dropdown__list-item">'.$term_child->name.'</option>';
        }

        $html .= '<div class="'.self::$textdomain.'-dropdown-wrapper"><select id="'.self::$textdomain.'-select-'.$atts[ 'posttype' ].'-'.$atts[ 'taxonomy' ].'-'.$term->slug.'" data-id="'.self::$textdomain.'-select-'.$atts[ 'posttype' ].'-'.$atts[ 'taxonomy' ].'-'.$term->term_id.'" class="'.self::$textdomain.'-select-dropdown '.$atts[ 'posttype' ].'" data-label="'.sprintf( __( '%s', self::$textdomain ), $term->name ).'" data-posttype="'.$atts[ 'posttype' ].'" data-taxonomy="'.$atts[ 'taxonomy' ].'" data-term="'.$term->slug.'">'.$term_options.'</select></div>';

      }

      $html .= '<a class="'.self::$textdomain.'-dropdown-reset"  href="#" data-posttype="'.$atts[ 'posttype' ].'" data-taxonomy="'.$atts[ 'taxonomy' ].'" >'.check_current_language('Reset Filter', 'Thiết lập lại').'</a>';
      return $html;
    }
  }
}