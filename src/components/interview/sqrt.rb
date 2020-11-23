# how to calculate square root of a number without using sqrt

class MyMath
  class NegativeSqrtNum < StandardError
    def message
      'Can not take sqrt of a negative number'
    end
  end

  class << self
    def sqrt(num)
      return 0 if num == 0
      raise new NegativeSqrtNum if num < 0

      left = 0
      right = num
      mid = left + ((right - left) / 2.0)

      max_tries = 20
      try_count = 0

      while ((mid * mid).round(3) != num.round(3)) && try_count < max_tries
        if (mid * mid) < num
          left = mid
        else
          right = mid
        end

        try_count += 1
        mid = left + ((right - left) / 2.0)
      end

      mid.round(3)
    end
  end
end

MyMath.sqrt(3)