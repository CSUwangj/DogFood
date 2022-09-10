+++
title = "Zeroth Post"
date = 2018-02-08T23:17:31+08:00
updated = 2020-08-07T01:48:37.628576+08:00
in_search_index = true

[taxonomies]
tags = [ "post", "lorem",]
categories = [ "Sample Post",]
archives = [ "archive",]
+++

Lorem ipsum dolor sit amet, c<https://testlink.com>onsectetur adipiscing elit.  Nulla ac iaculis libero. Suspendisse et sodales tellus, ut sodales mi.  Proin scelerisque est nec laoreet aliquet. Aenean et nunc at mi  efficitur sollicitudin at quis diam. Aenean mi massa, sollicitudin eu  condimentum sed, sodales ut nisi. Aenean iaculis ante id gravida  hendrerit. Nulla nisi neque, facilisis vitae viverra ac, interdum  malesuada quam. Quisque laoreet leo nec lectus lacinia, in lacinia enim  tempor.

<!-- more -->

Nulla facilisi. Aenean urna metus, egestas quis mauris non, dignissim vestibulum risus. Mauris posuere nisl a massa commodo rhoncus. Fusce  sed euismod dui, eget aliquet sem. Aenean quam est, iaculis quis aliquet at, semper id tellus. Suspendisse fringilla ipsum diam, suscipit  commodo neque varius ac. Maecenas commodo orci vitae massa dapibus,  interdum ultricies ex scelerisque. Nullam volutpat mollis aliquam. Donec fringilla interdum urna, nec posuere est tincidunt a.

``` cpp,linenos
class Solution {
public:
  void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    int low = n / 2;
    int high = n - low;
    for(int j = 0; j < high; ++j) {
      for(int i = 0; i+j < n-1-j; ++i) {
        swap(matrix[j][j+i], matrix[j+i][n-1-j]);
        swap(matrix[j][j+i], matrix[n-1-i-j][j]);
        swap(matrix[n-1-j][n-1-i-j], matrix[n-1-i-j][j]);
      }
    }
  }
};

// [0, 0], [0, n-1], [n-1, n-1], [n-1, 0] -> [n-1, 0], [0, 0], [0, n-1], [n-1, n-1]
// [0, 1], [1, n-1], [n-1, n-2], [n-2, 0] -> [n-2, 0], [0, 1], [1, n-1], [n-1, n-2]
// ...
// [0, i], [i, n-1], [n-1, n-1-i], [n-1-i, 0] -> ...
// ...
// [0, n-2], [n-2, n-1], [n-1, 1], [1, 0] -> ...

// [1, 1], [1, n-2], [n-2, n-2], [n-2, 1] -> ...
// [1, 2], [2, n-2], [n-2, n-3], [n-3, 1] -> ...
// ...
// [1, 1+i], [1+i, n-2], [n-2, n-2-i], [n-2-i, 1] -> ...

// [j, j+i], [j+i, n-1-j], [n-1-j, n-1-i-j], [n-1-i-j, j] -> ...

// Accepted
// 21/21 cases passed (6 ms)
// Your runtime beats 23.35 % of cpp submissions
// Your memory usage beats 33.5 % of cpp submissions (7.1 MB)
```

# A Really Clever Title

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac  iaculis libero. Suspendisse et sodales tellus, ut sodales mi. Proin  scelerisque est nec laoreet aliquet. Aenean et nunc at mi efficitur  sollicitudin at quis diam. Aenean mi massa, sollicitudin eu condimentum  sed, sodales ut nisi. Aenean iaculis ante id gravida hendrerit. Nulla  nisi neque, facilisis vitae viverra ac, interdum malesuada quam. Quisque laoreet leo nec lectus lacinia, in lacinia enim tempor.

Nulla facilisi. Aenean urna metus, egestas quis mauris non, dignissim vestibulum risus. Mauris posuere nisl a massa commodo rhoncus. Fusce  sed euismod dui, eget aliquet sem. Aenean quam est, iaculis quis aliquet at, semper id tellus. Suspendisse fringilla ipsum diam, suscipit  commodo neque varius ac. Maecenas commodo orci vitae massa dapibus,  interdum ultricies ex scelerisque. Nullam volutpat mollis aliquam. Donec fringilla interdum urna, nec posuere est tincidunt a.

``` cpp
class Solution {
public:
  vector<int> searchRange(vector<int>& nums, int target) {
    int len = nums.size();
    if(!len) return{-1, -1};
    int begin = 0;
    int end = len - 1;
    while(begin < end) {
      int mid = (begin + end) >> 1;
      if(nums[mid] < target) {
        begin = mid + 1;
      } else {
        end = mid;
      }
    }
    if(nums[begin] != target) return {-1, -1};
    int left = begin;
    begin = 0;
    end = len - 1;
    while(begin < end) {
      int mid = (begin + end + 1) >> 1;
      if(nums[mid] > target) {
        end = mid - 1;
      } else {
        begin = mid;
      }
    }
    return {left, begin};
  }
};

// Accepted
// 88/88 cases passed (13 ms)
// Your runtime beats 48.91 % of cpp submissions
// Your memory usage beats 83.66 % of cpp submissions (13.6 MB)
```

## A Really Clever Subtitle

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac  iaculis libero. Suspendisse et sodales tellus, ut sodales mi. Proin  scelerisque est nec laoreet aliquet. Aenean et nunc at mi efficitur  sollicitudin at quis diam. Aenean mi massa, sollicitudin eu condimentum  sed, sodales ut nisi. Aenean iaculis ante id gravida hendrerit. Nulla  nisi neque, facilisis vitae viverra ac, interdum malesuada quam. Quisque laoreet leo nec lectus lacinia, in lacinia enim tempor.

> Nulla facilisi. Aenean urna metus, egestas quis mauris non, dignissim vestibulum risus. Mauris posuere nisl a massa commodo rhoncus. Fusce  sed euismod dui, eget aliquet sem. Aenean quam est, iaculis quis aliquet at, semper id tellus. Suspendisse fringilla ipsum diam, suscipit  commodo neque varius ac. Maecenas commodo orci vitae massa dapibus,  interdum ultricies ex scelerisque. Nullam volutpat mollis aliquam. Donec fringilla interdum urna, nec posuere est tincidunt a.

> ``` cpp
> auto speedup = [](){
>   cin.tie(nullptr);
>   cout.tie(nullptr);
>   ios::sync_with_stdio(false);
>   return 0;
> }();
> class Solution {
> public:
>   int searchInsert(vector<int>& nums, int target) {
>     int begin = 0, end = nums.size();
>     nums.push_back(INT_MAX);
>     while(begin < end) {
>       int mid = (begin + end) >> 1;
>       if(nums[mid] < target) {
>         begin = mid + 1;
>       } else {
>         end = mid;
>       }
>     }
>     return begin;
>   }
> };
> 
> // Accepted
> // 64/64 cases passed (3 ms)
> // Your runtime beats 84.06 % of cpp submissions
> // Your memory usage beats 72.14 % of cpp submissions (9.7 MB)
> ```

### header3

Morbi molestie aliquam congue. Sed pulvinar id lectus eget luctus.  Fusce non augue efficitur, posuere dolor et, gravida enim. In  ullamcorper lorem turpis, in finibus eros posuere id. Maecenas vulputate dapibus risus vel tempor. In pulvinar commodo dui eu mattis. Duis  fringilla dictum elit, et dictum nisi sollicitudin non. Vestibulum  fermentum ligula id augue ullamcorper, a bibendum neque ultrices.

#### header4

Vivamus at volutpat dolor, vitae interdum nulla. Morbi vitae sagittis mi, a pulvinar ex. Fusce convallis diam quis turpis tristique, sodales  euismod nunc ullamcorper. Aenean id nulla et leo sodales aliquam. Donec a felis vel ipsum fringilla volutpat. Praesent luctus nisl sit amet est  interdum elementum. Etiam tincidunt malesuada sapien, quis tincidunt  urna faucibus sed. Aliquam iaculis ex at felis sodales iaculis. Sed quis mauris finibus, consequat risus rutrum, ornare libero. Maecenas  ultrices mollis nibh in interdum. Cras molestie quis velit quis dictum.  Cras vehicula neque id turpis facilisis fringilla. Quisque sit amet  tincidunt lectus, vel feugiat diam. Nullam euismod lacinia mi non  facilisis.