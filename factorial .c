void main()
{
    int x,s=1,i;

     printf("Enter a number :");
     scanf("%d",&x);

     for(i=1;i<x;i++)
     {
         s=s*i;
     }
     printf("factorial is %d",s);
     getch();

}
