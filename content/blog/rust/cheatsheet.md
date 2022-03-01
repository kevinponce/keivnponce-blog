---
title: Rust Cheatsheet
date: "2022-02-16T20:12:00.121Z"
tags: ["rust", "mac"]
header: { type: 'icon', bgColor: '#F61653', icon: 'apple' }
description: Rust Cheatsheet
author: Kevin Ponce
---

## Hello World
### helloWorld.rs
```rust
fn main() {
  println!("HelloWorld")
}
```

### In the terminal run:
```
rustc helloWorld.rs
./helloWorld
```

## Cargo
To create the folder stuture run:
```
 cargo new hello_world --bin
```

To run it call:
```
cargo run
```

To build it call:
```
cargo build
```
## Ignore warnings
This can be done by adding the following to the top of your module.
```rust
#![allow(dead_code)]
```

## Core DataTypes
```rust
// u = unsigned
// i = integer
// f = float
// u8, u16, u 32, u64, i8, i16, f32, f64
// isize, usize
let a: u8 = 2; // immutable unsiged 8 bits 0 -> 255
let mut b: i8 = 2; // mutable signed 8 bites -128 -> 127
let c = 123;
let d: f64 = 2.5;
let e: char = 'x';
let f: bool = false;

println!("c: {}, takes up {} bytes", c, mem::size_of_val(&c)); // => c: 123, takes up 4 bytes
```

## Operators
```rust
let a = 2 + 4;

a += 2;
a -= 1;
a *= 3;
a /= 4;
a %= 5;

f64::powi(a, 3);
f64::powf(a, 3);
```

## Bitwise Operators
```rust
| OR 
& AND
^ XOR
! NOR
```

## Logical Operators
```rust
3 < 5 // true
3 <= 5 // true
3 > 5 // false
3 >= 5 // false
3 == 5 // false
```

## mem size of val
```rust
use std::mem;

fn main() {
	println!("c: {}, takes up {} bytes", 10, mem::size_of_val(&10));
}
```

## Scope
```rust
fn scope_and_shadowing() {
  let a = 123;

  {
  	println!("{}", a); // 123
  	let b = 456;
  	let a = 678;
  	println!("{}", a); // 678
  	println!("{}", b);
  }

  // b is not avilable out here
  println!("{}", a); // 123
}
```

## Constants
```rust
const EXAMPLE:u8 = 1; // no fixed address
static Z:i32 = 123; // fixed address

fn main() {
  println!("{}", EXAMPLE);
  println!("{}", Z);
}
```

## Unsafe
```rust
static mut z:i32 = 123;

fn main() {
  unsafe{
    println!("{}", z);
  }
}
```

## Struct
```rust
struct Point {
	x: f64,
	y: f64
}

let p = Point { x: 0.0, y: 0.0 };
p.x;
p.y;
```

## Modules
### hi.rs
```rust
pub fn world() {
  println!("hello World");
}
```

### main.rs
```rust
mod hi;

fn main() {
  hi::world();
}
```

## Function
### basic
```rust
fn add(x: u8, y: u8) -> u8 {
  return x + y;
}

fn main() {
  println!("{}", age());
}
```

```rust
fn excite(s: &mut String) {
  s.push_str("!")
}

fn main() {
  let mut s: String = "hi".to_string();
  excite(&mut s);
  println!("{}", s);
}
```

```rust
fn return_str(s: &mut String) -> &str {
  s.push_str("hi world?");

  &s[..]
}

fn main() {
  let mut s = String::new();
  let s = return_str(&mut s);
  println!("{}", s);
}
```

## If statement
```rust
let temp = 25;

if temp > 30 {
  println!("hot");
} else if temp < 10 {
  println!("cold");
} else {
  println!("really cold");
}

let day = if temp > { "sunny" } else { "cloudy"};
```

## While Loop
```rust
let mut x = 0;

while x < 10 {
  x += 1;
}
```

## Loop
```rust
let mut x = 0;
loop {
  if x > 10 { break; } 

  x += 1;
}
```

## For Loop
```rust
for x in 1..10 {
  if x == 3 { continue; }
  if x == 8 { break; }
}

for (pos, x) in (30..41).enumerate() {
  println!("{}: {}", pos, x);
}
```

## Match
```rust
let country_code = 100;

let country = match country_code {
  1 => "US",
  44 => "UK",
  46 => "Sweden",
  1..=1000 => "unknown",
  _ => "invalid"
};
```

## Enum
```rust
enum State {
  Locked,
  Failed,
  Unlocked
}

fn main() {
  let state = State::Unlocked;

  let message = match state {
    State::Unlocked => { "unlocked" },
    State::Failed => { "unlocked" },
    State::Unlocked => { "unlocked" },
    _ => {"unknown"}
  };

  println!("{}", message);
}


enum Color {
  Red,
  Blue,
  Green,
  Rgb(u8,u8,u8), //tuple
  Cymk{ cyan: u8, magenta: u8, yellow: u8, black: u8 }, // struct
}



let c:Color = Color::Red;

match c {
  Color::Red => println!("r"),
  Color::Green => println!("g"),
  Color::Blue => println!("b"),
  Color::Rgb(0,0,0)
  | Color::Cymk{cyan:_, magenta:_, yellow:_, black: 255} => println!("Black"),
  _ => {}
}
```

## Union
Personally not a fan since you have to use an unsafe block...


## Option of T
```rust
let x = 2.0;
let y = 1.0;
let result = if y != 0.0 { Some(x/y) } else { None };

if let Some(z) = result {
  println!("result = {}", z);
}
```

## Array
```rust
let mut a:[i32;5] = [1, 2, 3, 4, 5];

println!("length: {}", a.len());
println!("first: {}", a[0]);

a[0] = 6;
println!("first: {}", a[0]);

println!("{:?}", a); // debug

if a == [1, 2, 3, 4, 5] {
println!("match");
}

let b = [1u16; 10]; // => [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
println!("{:?}", b);

let matrix:[[f32; 3]; 2] = [
[1.0, 0.0, 0.0],
[0.0, 1.0, 0.0],
];

println!("{:?}", matrix);
```

## Slice
```rust
fn use_slice(slice: &mut [i32]) {
  println!("{}, {}", slice.len(), slice[0]);

  slice[1] = 123;
}

let mut data = [1, 2, 3, 4, 5];

use_slice(&mut data[1..4]);
use_slice(&mut data);
```

## Tuple
```rust
let sp = sum_and_product(3, 4);
println!("{}, {}", sp.0, sp.1);

let (a, b) = sum_and_product(5, 6);
println!("{}, {}", a, b);

let sp2 = sum_and_product(5, 6);
let ((c, d), (e, f)) = (sp, sp2);
println!("{}, {}", e, f);
```

## Pattern Matching
```rust
fn how_many(n: i32) -> &'static str{
  match n {

    0 => "no",
    1 | 2 => "one or two",
    12 => "a dozen",
    9..=11 => "lots",
    _ => "a few"
  }
}

for x in 0..13 {
  println!("{}, {}", x, how_many(x));
}


let point = (3,4);
match (point) {
  (0, 0) => println!("origin"),
  (0, y) => println!("x axis and y is {}", y),
  (x, 0) => println!("y axis and x is {}", x),
  (_, y) => println!("(?,{})", y),
}
```

## Generic
```rust
struct Point<T> {
  x: T,
  y: T
}

struct OtherPoint<T, V> {
  x: T,
  y: V
}

struct Line<T> {
  start: Point<T>,
  end: Point<T>,
}

let a = Point { x: 0.0, y: 1.1 };
let b = Point { x: 0, y: 1 };
let c = Point { x: 3, y: 2 };

let myLine = Line { start: c, end: b };
println!("{:?}", (myLine.start).x);
```
