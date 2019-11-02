const disk_capacity = prompt("Enter the removable disk capacity in GB");
alert(
    "Number of files with size 820MB :" +
    (disk_capacity * 1024 - ((disk_capacity * 1024) % 820)) / 820
);