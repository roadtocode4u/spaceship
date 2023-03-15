---
title: Ascii-and-operations-on-string
description: "ascii-and-operations-on-string"
hide_table_of_contents: true
---

**ASCII**  
ASCII stands for American Standard Code for Information Interchange.


**Example 1 :**  
Find ASCII value if character is given

```c
#include <stdio.h>

int main() {
    char val = 'A';
    
    printf("%d", val);
    return 0;
}
```
**Output :**

>65

**Example 2 :**  
Find character if ASCII value is given

```c
#include <stdio.h>

int main() {
    char val = 98;
    
    printf("%C", val);
    return 0;
}
```
**Output :**

>b



**Example 3 :**   
Program to print  entire ASCII table 

```c
#include <stdio.h>

int main() {
    for(int i=0; i<=127; i++)
    {
        printf("\n%d =>%c ",i,i);
    }
    return 0;
}
```

**Output :**  

>32 =>  
>33 => !  
>34 => "  
>35 => #  
>36 => $  
>37 => %  
>38 => &  
>39 => '  
>40 => (  
>41 => )  
>42 => *  
>43 => +  
>44 => ,  
>45 => -  
>46 => .  
>47 => /  
>48 => 0  
>49 => 1  
>50 => 2  
>51 => 3  
>52 => 4  
>53 => 5  
>54 => 6  
>55 => 7  
>56 => 8  
>57 => 9  
>58 => :  
59 => ;  
60 => <  
61 => =  
62 => >  
63 => ?  
64 => @  
65 => A  
66 => B  
67 => C  
68 => D  
69 => E  
70 => F  
71 => G  
72 => H  
>73 => I  
>74 => J  
>75 => K  
>76 => L  
>77 => M  
>78 => N  
79 => O  
80 => P  
81 => Q   
82 => R  
83 => S  
84 => T  
85 => U  
86 => V  
87 => W  
88 => X  
89 => Y  
90 => Z  
91 => [  
92 => \  
93 => ]  
94 => ^  
95 => _  
96 => `  
97 => a  
98 => b  
99 => c  
100 => d  
101 => e  
102 => f  
103 => g  
104 => h  
105 => i  
106 => j  
107 => k  
108 => l  
109 => m  
110 => n  
111 => o  
112 => p  
113 => q  
114 => r  
>115 => s  
>116 => t  
>117 => u  
>118 => v  
>119 => w  
>120 => x  
>121 => y  
>122 => z  
>123 => {  
>124 => |  
>125 => }  
>126 => ~  
>127 => �  

**Example 4:**   
Convert Small letter to Capital letter.
```c
#include <stdio.h>

int main() {
    
    char small;
    printf("Enter small letter: ");
    scanf("%c", &small);
    
    char capital = small -32

    printf("%c", capital)
    
    return 0;
}
```
**Output**  
    Enter small Character: a  
    Capital letter is A

**Example 5:**   
Convert Capital  letter to Small letter.
```c
#include <stdio.h>

int main() {
    
    char input;
    printf("Enter a CAPITAL Character: ");
    scanf("%c", &input);
    
    if(input>=65 && input<=90)
    {
        input = input + 32;
    }
    
    printf("small letter is %c", input);
    
    return 0;
}
```

 **Output :**

Enter a CAPITAL Character: H  
Small letter is h

**Example 6 :**
```c
#include <stdio.h>

int main() {
    char word[10];
    
    printf("Enter a word in small letters: ");
    scanf("%s", word);
    
    int i=0;
    
    while(word[i]!='\0')
    {
        word[i] = (word[i] - 32);
        
        i++;
    }
    
    printf("CAPITAL WORD is: %s ", word);
    
    return 0;
}
```

**Output :**

Enter a word in small letters: roadtocode  
CAPITAL WORD is: ROADTOCODE