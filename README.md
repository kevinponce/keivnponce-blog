https://medium.com/voice-tech-podcast/single-word-speech-recognition-892c7e01f5fc
https://github.com/RRisto/single_word_asr_gmm_hmm



npm run develop
npm run deploy

TODO 

https://blog.cloud66.com/adding-sso-to-your-rails-application-with-saml/

my laptop script

immer
react dropzone
react flatten data model
create a post on kaminari

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


```
D2822/12 1250KV

28 motor or rotor diameter (wider typically means more torque)
22 Motor or roto height
12 number of wire turns. smaller the number the faster the motor will turn, but with less torque. The higher the number means more torque but it will be slower.

1250 Revolution per volt
```


rails routes
resources :example, only: [:show], param: 'zip_code'
namespace
nested
js obfuscator




TODO games:
pong
pac man
buble trouble
seperate ball game
pipe game
21
rubix cube
rtree cache

inspiration:
https://jasoncharnes.com
https://www.joshuawood.net
https://blog.ueber.io/post/list-of-side-projects/
https://jenniferdewalt.com/
https://www.drip.com/

