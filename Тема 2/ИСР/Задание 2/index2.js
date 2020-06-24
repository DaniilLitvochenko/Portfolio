let res = num(5)(3);
console.log(res);

function num(n)
{
   return(m) => {
        if (m == 0)
            return 1;

        if (m == 1)
            return n;

        return n * num(n)(m - 1);
    }
}