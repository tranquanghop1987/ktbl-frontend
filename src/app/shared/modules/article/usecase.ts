// import {useCallback, useEffect, useState} from 'react';
// import {getArticles} from "@/app/shared/modules/article/repo";
//
//
// const findArticles = (type: string) => {
//
//   const [isLoading, setLoading] = useState(true);
//
//   const fetchData = useCallback(async (type: string) => {
//     setLoading(true);
//     try {
//       const filters = {
//       'type': type,
//     }
//       const articles = await getArticles(filters);
//
//
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false)
//     }
//
//
//   }, []);
//
//   const fetchNews = fetchData('news');
//   const fetchPress = fetchData('press');
//
//   // only call 1 times
//   useEffect(()=> {
//    fetchNews();
//    fetchPress();
//   }, [])
// }
