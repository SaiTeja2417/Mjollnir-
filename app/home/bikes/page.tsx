// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Zap, Settings, Heart, Clock } from 'lucide-react';
// import { ImageWithFallback } from '@/app/figma/ImageWithFallback';


// export default function TypesOfBikes() {
//   const bikeTypes = [
//     {
//       id: 1,
//       name: 'Manual Cycles',
//       description: 'Classic pedal-powered bikes perfect for short commutes and leisure rides',
//       image: 'https://rukminim2.flixcart.com/image/400/400/xif0q/cycle/u/f/l/drift-24t-kids-multi-speed-gear-cycle-for-boys-girls-age-9-to-13-original-imah8kbg2hdz2d68.jpeg?q=90&crop=false',
//       features: ['Lightweight', 'Easy to use', 'Eco-friendly', 'Low maintenance'],
//       priceRange: '₹10-20/hour',
//       icon: Heart,
//       color: 'text-green-600',
//       bgColor: 'bg-green-50'
//     },
//     {
//       id: 2,
//       name: 'Electric Cycles',
//       description: 'Battery-powered bikes with pedal assistance for effortless longer rides',
//       image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       features: ['Battery assisted', 'Longer range', 'Hill climbing', 'Smart features'],
//       priceRange: '₹25-40/hour',
//       icon: Zap,
//       color: 'text-blue-600',
//       bgColor: 'bg-blue-50'
//     },
//     {
//       id: 3,
//       name: 'Gear Bikes',
//       description: 'Multi-speed bikes designed for varied terrains and longer distances',
//       image: 'https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/b9ed0664b35268501713187493715.jpg',
//       features: ['Multiple gears', 'Terrain adaptive', 'Speed control', 'Performance focused'],
//       priceRange: '₹15-30/hour',
//       icon: Settings,
//       color: 'text-purple-600',
//       bgColor: 'bg-purple-50'
//     },
//     {
//       id: 4,
//       name: 'Kids Bikes',
//       description: 'Smaller, safer bikes designed specifically for children and young riders',
//       image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/cycle/g/o/l/bicycle-the-smart-plug-and-play-kids-cycle-16-inches-t-for-4-7-original-imagts3bgzbwuhry.jpeg?q=90&crop=false',
//       features: ['Child-sized', 'Safety first', 'Training wheels', 'Bright colors'],
//       priceRange: '₹8-15/hour',
//       icon: Heart,
//       color: 'text-orange-600',
//       bgColor: 'bg-orange-50'
//     }
//   ];

//   return (
//     <section id="bikes" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Types of Bikes
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Choose from our diverse fleet of bikes designed to meet every rider's needs and preferences.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {bikeTypes.map((bike) => (
//             <Card key={bike.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               <div className="relative h-64">
//                 <ImageWithFallback
//                   src={bike.image}
//                   alt={bike.name}
//                   className={`w-full h-full ${bike.id === 1 || bike.id === 3 || bike.id === 4 ? 'object-contain bg-gray-100' : 'object-cover'}`}
//                 />
//                 <div className="absolute top-4 right-4">
//                   <Badge variant="secondary" className="bg-white/90 text-gray-800">
//                     {bike.priceRange}
//                   </Badge>
//                 </div>
//                 <div className={`absolute top-4 left-4 p-2 rounded-full ${bike.bgColor}`}>
//                   <bike.icon className={`h-6 w-6 ${bike.color}`} />
//                 </div>
//               </div>
              
//               <CardHeader>
//                 <CardTitle className="flex items-center justify-between">
//                   <span>{bike.name}</span>
//                   <Clock className="h-5 w-5 text-gray-400" />
//                 </CardTitle>
//               </CardHeader>
              
//               <CardContent className="space-y-4">
//                 <p className="text-gray-600">
//                   {bike.description}
//                 </p>
                
//                 <div className="space-y-2">
//                   <h4 className="font-semibold text-gray-900">Key Features:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {bike.features.map((feature, index) => (
//                       <Badge key={index} variant="outline" className="text-xs">
//                         {feature}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t">
//                   <div className="flex justify-between items-center">
//                     {/* <span className="text-sm text-gray-600">Starting from</span> */}
//                     <span className={`font-bold ${bike.color}`}>{bike.priceRange}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//               Not sure which bike is right for you?
//             </h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Our smart recommendation system will suggest the perfect bike based on your destination, 
//               duration, and riding preferences.
//             </p>
//             <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
//               Get Bike Recommendation
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }