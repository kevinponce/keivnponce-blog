---
title: Ruby Matmul
date: "2019-08-04T22:12:00.121Z"
tags: ["Ruby"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
---

So I just started playing around with machine learning, and keep seeing matmul.
I wanted to play around remember the math on how to calculate matmul, so I created my own matmul in ruby.

```ruby
def matmul(matrix1, matrix2)
  new_matrix = []
  matrix1.each_with_index do |ar1, mat1RowI|
    new_matrix[mat1RowI] = []
    matrix1.length.times do |mat2ColI|
      new_matrix[mat1RowI][mat2ColI] = ar1.each_with_index.map do |val1, mat2Row|
      val1 * matrix2[mat2Row][mat2ColI]
      end.sum
    end
  end

  new_matrix
end

matrix1 = [
  [1, 2],
  [3, 4],
  [5, 6]
]
matrix2 = [
  [1, 3, 5],
  [2, 4, 6]
]

new_matrix = matmul(matrix1, matrix2)
```

Voila
