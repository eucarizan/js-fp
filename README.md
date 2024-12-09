# first project

- [first project](#first-project)
  - [learnings](#learnings)
  - [about](#about)
  - [stages](#stages)
    - [1: print the prices](#1-print-the-prices)
    - [2: measure the total income of your shop](#2-measure-the-total-income-of-your-shop)
    - [3: calculate net income](#3-calculate-net-income)

## learnings 
this project will introduce you to hyperskill projects. practice javascript coding to build a program that can automate your account management routine.

## about
imagine that you're the owner of a new small corner shop. you are doing well and want to determine how much you earned in the first month. create a simple tool that will calculate your net income. upon completing this project, you can use this tool for your own accounting needs.

## stages
### 1: print the prices
<details>
<summary>start with printing the names of items and their prices using your first javascript function.</summary>

#### 1.1 description
you've recently opened a new corner shop. it is relatively small; it contains only a bubblegum, toffee, ice cream, milk chocolate, doughnuts, and pancakes.

the first version of the program will display a list of all the products with their prices.

#### 1.2 objectives
- print the `prices`: line;
- print the item names and prices from the example below. your output format should follow it.
- use `console.log()` to get the desired output. 

#### 1.3 example
**example 1**: *output at the end of this stage*
```
prices:
bubblegum: $2
toffee: $0.2
ice cream: $5
milk chocolate: $4
doughnut: $2.5
pancake: $3.2
```

</details>

### 2: measure the total income of your shop 
<details>
<summary>you know how much you earned by selling each item. calculate the total earnings before staff and other expenses!</summary>

#### 2.1 description
a month has passed since the opening of your shop. let's calculate the total earnings for this period! you know the total earned amount for each item:

item name|earned amount
:-:|:-:
`bubblegum`|`$202`
`toffee`|`$118`
`ice cream`|`$2250`
`milk chocolate`|`$1680`
`doughnut`|`$1075`
`pancake`|`$80`

**use the above data to find the total income for the first month and log the results as shown below.**

#### 2.2 objectives
in this stage, your program should:
- print the `earned amount`: line.
- print the item names and the earned amount for each of them;
- print the total earnings as shown below. replace `0.0` with the actual total sum:

```
income: $0.0
```

#### 2.3 examples
**example 1**: _output at the ned of this stage would look like below **(figures may vary)**_
```
earned amount:
bubblegum: $202
toffee: $118
ice cream: $2250
milk chocolate: $1680
doughnut: $1075
pancake: $80

income: $7777.0
```

</details>

### 3: calculate net income
<details>
<summary>measure the shop's net income. subtract staff, electricity, and security expenses.</summary>

#### 3.1 description
in the final stage, let's calculate the shop's net income. to do this, you need to retrieve staff and other expenses from the user input and subtract them from the income you came up with in the previous stage.

you don't need to change the previous functionality of your program, but to expand it by adding both inputs and calculating the net income.

we've imported the `sync-input` library that you must use to take input from the user.

>note that the user's input will be a string value. therefore, before performing subtraction, make sure to convert the retrieved value to an integer.

#### 3.2 objectives
in this stage, your program should:

- print the item names, what you earned for each of them and total earnings as before;
- ask users for `staff expenses` with the staff expenses: string and for other expenses with the `other expenses:` string;
- calculate and print the net income as shown below. replace `0.0` with the actual net income:

```
net income: $0.0
```

#### 3.3 examples
the greater-than symbol followed by a space (`> `) represents the user input. note that it's not part of the input: it is just used to separate the user input from the output of your program in the stage examples, you don't need to print the `>` sign!

**example 1**: _the user inputs 2000 for staff expenses and 205 for other expenses accordingly:_
```
earned amount:
bubblegum: $202
toffee: $118
ice cream: $2250
milk chocolate: $1680
doughnut: $1075
pancake: $80

income: $5405
staff expenses:
> 2000
other expenses:
> 205
net income: $3200
```

**example 2**: _the user inputs 5203 for staff expenses and 400 for other expenses accordingly:_
```
earned amount:
bubblegum: $202
toffee: $118
ice cream: $2250
milk chocolate: $1680
doughnut: $1075
pancake: $80

income: $5405
staff expenses:
> 5203
other expenses:
> 400
net income: $-198
```

</details>

[<<](https://github.com/eucarizan/front-end/blob/main/README.md)
<!--
:%s/\(Sample \(Input\|Output\) \d:\)\n\(.*\)/```\r\r**\1**\r```\3/gc
-->
