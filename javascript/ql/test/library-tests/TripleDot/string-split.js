function splitWithoutArguments() {
    sink(source('split.noargs').split()[0]); // $ hasTaintFlow=split.noargs
    sink(source('split.undefined').split(undefined)[0]); // $ hasTaintFlow=split.undefined
}
