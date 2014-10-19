
# Alloy intensive compilation

An Alloy Titanium application that takes a lot of time to compile ( 1000 widgets ).

## The problem

When the mobile application grows the Alloy compilation process starts to take a lot of time. This tries to compile only the
files we need to get some better compilation times.


## Using custom build of Alloy@1.3.1

The custom version of alloy is hosted at (https://github.com/aetheon/alloy/tree/1_3_X)[https://github.com/aetheon/alloy/tree/1_3_X].

This version tracks the modified date of each alloy file. If a change is made to a widget file (.js, .xml, .tss) then the
widget file compilation is done, otherwise that is ignored.


```

# install custom alloy 1.3.1
> sudo npm i "https://github.com/aetheon/alloy/blob/1_3_X/alloy-1.3.1.tgz?raw=true" -g

```

```

# cleanup ti app compiled files
> rm -rf Resources
> rm -rf build

```

```

# first build
> time ti build -p ios -b
real 1m53.242s

# next build (no file changes)
> time ti build -p ios -b
real 0m34.862s

```

## TODO

Apply the similar method on optimizeCompiledCode() on Alloy code.

## Authors

Oscar Brito - @aetheon