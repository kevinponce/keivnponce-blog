---
title: Longest Valid Parentheses
date: "2019-10-26T22:12:00.121Z"
tags: ["interview"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'interview' }
description: Find the longest valid parentheses in a string
---
##Question:
```
Find the longest valid parentheses in a string.
```

##Answer:
```ruby
def longest_valid_parentheses(s)
  return 0 unless s
  return 0 if s.length < 1

  dp = Array.new(s.length, 0)

  (s.length).times do |i|
    if s[i] == ')'
      if i > 0 && s[i - 1] == '(' # '()'
        if i > 2 && dp[i - 2] > 0 #()()
          dp[i] = dp[i - 2] + 2
        else
          dp[i] = 2          
        end
      else
        prev_longest = dp[i - 1]

        if prev_longest > 0 # (()), ((()))
          if i - prev_longest - 1 >= 0 && s[i - prev_longest - 1] == '('
            dp[i] = prev_longest + 2
            
            if i - prev_longest - 2 >= 0 # ()(())
              dp[i] += dp[i - prev_longest - 2]
            end
          end
        end
        
      end
    end
  end

  dp.max
end
```