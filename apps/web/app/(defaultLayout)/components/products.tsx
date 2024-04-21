'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/avatar';
import { Badge } from '@repo/ui/components/badge';
import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { useSearchParams } from 'next/navigation';
import Product from './product';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@web/common/api';
import ProductFilters from './product-filters';

import {
  useQueryParam,
  withDefault,
  NumericArrayParam,
} from 'use-query-params';

const Products = () => {
  //const [filter,setFilter] = useQuery('')

  const searchParams = useSearchParams();

  //const productTypes = searchParams.getAll('productTypes');

  const [productTypes] = useQueryParam(
    'productTypes',
    withDefault(NumericArrayParam, [])
  );

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['productTypes', productTypes],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `product?productTypes=${productTypes}`
      );
      return data.data;
    },
    /*refetchOnWindowFocus: false,
        retry: 1,*/
  });

  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
        <Card x-chunk='dashboard-01-chunk-0'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-1'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+2350</div>
            <p className='text-xs text-muted-foreground'>
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-2'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Sales</CardTitle>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+12,234</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk='dashboard-01-chunk-3'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-12'>
        <ProductFilters />
        <Card className='col-span-9'>
          <CardHeader className='flex flex-row items-center'>
            <div className='grid gap-2'>
              <CardTitle>Products</CardTitle>
              <CardDescription>View products from our store.</CardDescription>
            </div>
            <Button asChild size='sm' className='ml-auto gap-1'>
              <Link href='#'>
                View All
                <ArrowUpRight className='h-4 w-4' />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className='flex max-w-full flex-wrap gap-x-12  pb-4'>
              {data?.map((product) => {
                return (
                  <Product
                    key={product.name}
                    product={product}
                    className='w-[200px]'
                    aspectRatio='portrait'
                    width={250}
                    height={330}
                  />
                );
              })}{' '}
            </div>
          </CardContent>
        </Card>{' '}
      </div>
    </main>
  );
};

export default Products;
