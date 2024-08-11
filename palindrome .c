void main()
{
    char a[10],t;
    int l,i;
    printf("Enter a string :");

    scanf("%s",a);
    l=strlen(a);
    for(i=0;i<l/2;i++)
           if(a[i]!=a[l-i-1])

    {

        printf(" it is not Palindrome");
    }

        printf("it is palindrome ");

    getch();
}
