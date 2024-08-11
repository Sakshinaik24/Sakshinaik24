void main()
{

    char a[10],t;
    int l,i ;

    printf("Enter a string :");
    scanf("%s",a);

        l=strlen(a);

    for(i=0;i<l/2;i++)
    {
          t=a[i];
          a[i]=a[l-i-1];
          a[l-i-1]=t;
           }

          printf("revers string is %s",a);
          getch();
}
