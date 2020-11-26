npm run develop
npm run deploy

TODO 


my laptop script

immer
react dropzone
react flatten data model

rails doc api two different apis one project
https://leetcode.com/problems/n-queens/

db overlap
handing time like availabilites


SELECT * FROM blog_posts AS a WHERE (SELECT COUNT(*) FROM blog_posts AS b WHERE b.category = a.category AND b.wordpress_blog_id >= a.wordpress_blog_id) <= 10 ORDER BY a.category ASC, a.wordpress_blog_id DESC




google advance search inurl: ''

react add/update/remove items from array


PhiAttrs.configure do |conf|
  if Rails.env.development?
    conf.log_path = Rails.root.join('log', "phi_access_#{Rails.env}.log")
  else
    conf.log_path = STDOUT
  end
end


redis commands get, set, keys, scan



# rails timezones
bin/rails time:zones
```
include ActiveSupport
ActiveSupport::TimeZone::MAPPING
TimeZone.all
TZInfo::Timezone.all_country_zone_identifiers
TZInfo::Timezone.all_country_zones
ActiveSupport::TimeZone.country_zones("US")

country_zone = ActiveSupport::TimeZone.new("America/Los_Angeles")
country_zone.utc_offset
country_zone.formatted_offset
```


```
console.log(moment.tz.guess())
console.log(moment.tz.names())
console.log(moment.tz.countries())
```




rails routes
resources :example, only: [:show], param: 'zip_code'
namespace
nested




TODO games:
pong
pac man
buble trouble
seperate ball game
pipe game
21
rubix cube

inspiration:
https://jasoncharnes.com
https://www.joshuawood.net

