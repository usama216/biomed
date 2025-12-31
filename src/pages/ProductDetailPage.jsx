import React, { useState, useRef, useEffect } from 'react';
import { Star, Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { getImageUrl, getVideoUrl } from '../utils/imageUtils';

const API_BASE_URL = 'https://biomed-phamacy-backend.vercel.app/api';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    directions: true,
    ingredients: true,
    faqs: false,
    reviews: false,
    quality: false
  });
  const relatedScrollRef = useRef(null);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        const data = await response.json();
        
        if (data.product) {
          setProduct(data.product);
          // Set video mode if product has video
          setIsVideoMode(!!data.product.video);
        } else {
          // Fallback: fetch all products and find the one
          const allRes = await fetch(`${API_BASE_URL}/products`);
          const allData = await allRes.json();
          const foundProduct = allData.products?.find(p => p.id === id);
          if (foundProduct) {
            setProduct(foundProduct);
            setIsVideoMode(!!foundProduct.video);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
      window.scrollTo(0, 0);
      setSelectedImage(0);
    }
  }, [id]);

  // Fetch all products for related products section
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setAllProducts(data.products || []);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };

    fetchAllProducts();
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollRelatedLeft = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({
        left: -220,
        behavior: 'smooth'
      });
    }
  };

  const scrollRelatedRight = () => {
    if (relatedScrollRef.current) {
      relatedScrollRef.current.scrollBy({
        left: 220,
        behavior: 'smooth'
      });
    }
  };

  // Static product database removed - now using API
  // Keeping this comment for reference
  const _productsDatabase_removed = {
    'prod-1': {
      id: 'prod-1',
      name: 'Magnesium Glycinate | Magnizen',
      rating: 4.5,
      reviews: 132,
      questions: 5,
      originalPrice: 4500,
      discountedPrice: 3500,
      video: '/assets/products/product-video.mp4', // Main video for prod-1
      images: [
        '/assets/products/main-product.jpeg',
        '/assets/products/main-product-v2.jpeg',
        '/assets/products/main-product-v3.jpeg'
      ],
      packSize: '60 Tablets',
      wellnessCoins: 3500,
      inStock: true,
      helps: [
        'Calm the mind by supporting the nervous system',
        'Relax muscles and nerves to promote restful sleep',
        'Provide optimal support with its highly absorbable and gentle form'
      ],
      details: 'Nutrifactor\'s Magnizen features Magnesium Glycinate, a highly bioavailable form of magnesium that the body can absorb and utilize effectively. As a chelated form, Magnesium Glycinate is well-tolerated by digestive system. This essential mineral acts a cofactor for over 600 plus enzymatic reactions to support various bodily functions, including promoting muscle relaxation, maintaining a calm and balanced mood, and enhancing sleep quality. Additionally, it reduces occasional stress. Magnesium also contributes to Calcium regulation by stimulating calcitonin secretion, which promotes calcium influx into the bones, aiding in optimal bone mineralization and overall bone health. It supports cognitive and neuromuscular functions, promotes cardiovascular health, and contributes to energy production and metabolic processes.',
      directions: 'Take 1-2 tablets daily, preferably with meal or as directed by a physician. Do not exceed the recommended daily dose.',
      ingredients: [
        { name: 'Magnesium Glycinate', amount: '400 mg' },
        { name: 'Magnesium Citrate', amount: '200 mg' },
        { name: 'Vitamin B6', amount: '10 mg' }
      ]
    },
    'prod-2': {
      id: 'prod-2',
      name: 'Vanur Men',
      rating: 4.8,
      reviews: 89,
      questions: 3,
      originalPrice: 2000,
      discountedPrice: 1650,
      images: [
        '/assets/products/product-1.jpeg'
      ],
      packSize: '30 Capsules',
      wellnessCoins: 1650,
      inStock: true,
      helps: [
        'Calm the mind by supporting the nervous system',
        'Relax muscles and nerves to promote restful sleep',
        'Provide optimal support with its highly absorbable and gentle form'
      ],
      details: 'Nutrifactor\'s Magnizen features Magnesium Glycinate, a highly bioavailable form of magnesium that the body can absorb and utilize effectively. As a chelated form, Magnesium Glycinate is well-tolerated by digestive system. This essential mineral acts a cofactor for over 600 plus enzymatic reactions to support various bodily functions, including promoting muscle relaxation, maintaining a calm and balanced mood, and enhancing sleep quality. Additionally, it reduces occasional stress. Magnesium also contributes to Calcium regulation by stimulating calcitonin secretion, which promotes calcium influx into the bones, aiding in optimal bone mineralization and overall bone health. It supports cognitive and neuromuscular functions, promotes cardiovascular health, and contributes to energy production and metabolic processes.',
      directions: 'Take 1-2 tablets daily, preferably with meal or as directed by a physician. Do not exceed the recommended daily dose.',
      ingredients: [
        { name: 'Magnesium Glycinate', amount: '400 mg' },
        { name: 'Magnesium Citrate', amount: '200 mg' },
        { name: 'Vitamin B6', amount: '10 mg' }
      ]
    },
    'prod-3': {
      id: 'prod-3',
      name: 'Vanur Women',
      rating: 4.6,
      reviews: 156,
      questions: 8,
      originalPrice: 1800,
      discountedPrice: 1500,
      images: [
        '/assets/products/product-2.jpeg'
      ],
      packSize: '90 Tablets',
      wellnessCoins: 1500,
      inStock: true,
      helps: [
        'Calm the mind by supporting the nervous system',
        'Relax muscles and nerves to promote restful sleep',
        'Provide optimal support with its highly absorbable and gentle form'
      ],
      details: 'Nutrifactor\'s Magnizen features Magnesium Glycinate, a highly bioavailable form of magnesium that the body can absorb and utilize effectively. As a chelated form, Magnesium Glycinate is well-tolerated by digestive system. This essential mineral acts a cofactor for over 600 plus enzymatic reactions to support various bodily functions, including promoting muscle relaxation, maintaining a calm and balanced mood, and enhancing sleep quality. Additionally, it reduces occasional stress. Magnesium also contributes to Calcium regulation by stimulating calcitonin secretion, which promotes calcium influx into the bones, aiding in optimal bone mineralization and overall bone health. It supports cognitive and neuromuscular functions, promotes cardiovascular health, and contributes to energy production and metabolic processes.',
      directions: 'Take 1-2 tablets daily, preferably with meal or as directed by a physician. Do not exceed the recommended daily dose.',
      ingredients: [
        { name: 'Magnesium Glycinate', amount: '400 mg' },
        { name: 'Magnesium Citrate', amount: '200 mg' },
        { name: 'Vitamin B6', amount: '10 mg' }
      ]
    },
    'prod-4': {
      id: 'prod-4',
      name: 'Certeza BM-405 Digital Blood Pressure Monitor',
      rating: 4.7,
      reviews: 245,
      questions: 12,
      originalPrice: 6500,
      discountedPrice: 5950,
      images: [
        '/assets/products/other-product/Certeza-1.webp',
        '/assets/products/other-product/Certeza-2.webp',
        '/assets/products/other-product/Certeza-3.webp'
      ],
      packSize: '1 Unit',
      wellnessCoins: 5950,
      inStock: true,
      helps: [
        'Accurately measures blood pressure and pulse on the arm',
        'Features a soft cuff material for added comfort during measurements',
        'Includes a hypertension indicator and an irregular heartbeat detector'
      ],
      details: 'Certeza BM-405 Digital Blood Pressure Monitor is a sophisticated and user-friendly device designed for accurate and reliable blood pressure monitoring. Ideal for both home and clinical use, it features a comfortable arm cuff that adjusts to fit most adults, ensuring precise readings. The monitor is equipped with an easy-to-read large LCD, showing clear and accurate measurements of systolic and diastolic blood pressure, along with pulse rate. It includes essential health indicators like an irregular heartbeat detector and a hypertension alert. Features: Universal cuff fits arm circumferences from 22 to 42 cm. Utilizes a third-generation inflation mechanism. Calculates average values and has a memory function with date and time for 2 users, storing 60 readings each. Simple one-button automatic operation for user convenience. Powered by long-lasting alkaline batteries. Classified as a medical device. Automatic shut-off and error signal in case of incorrect application. Comes with a carrying bag; an optional adapter is available.',
      directions: 'Follow the user manual instructions for proper use. Place the cuff on your upper arm, press the start button, and wait for the automatic measurement to complete. Do not use if you have any medical conditions without consulting your physician.',
      ingredients: [
        { name: 'Upper arm blood pressure monitor with cuff', amount: '1 Unit' },
        { name: 'Carrying bag', amount: '1 Unit' },
        { name: 'AAA batteries', amount: '4 Units' },
        { name: 'User manual', amount: '1 Unit' }
      ]
    },
    'prod-5': {
      id: 'prod-5',
      name: 'Bookang – B.P Apparatus Aneroid',
      rating: 4.6,
      reviews: 189,
      questions: 8,
      originalPrice: 2800,
      discountedPrice: 2500,
      images: [
        '/assets/products/other-product/Bookang.jpg'
      ],
      packSize: '1 Unit',
      wellnessCoins: 2500,
      inStock: true,
      helps: [
        'Accurate blood pressure measurement with aneroid manometer',
        'Comfortable NYLON cuff for easy application',
        'Durable LATEX bladder and bulb for reliable operation'
      ],
      details: 'Bookang BK2002 aneroid sphygmomanometer is a professional-grade blood pressure monitoring device designed for accurate measurements. Features include: Aneroid manometer for precise readings, NYLON cuff for comfortable application, LATEX bladder (22*12cm) for durability, and LATEX bulb for easy inflation. The device measures blood pressure in the range of 0-300mmHg with an accuracy of +/-3mmHg and sub-division of 2mmHg. Available in multiple colors: blue, red, black, and grey. The cuff size is 50*14cm, making it suitable for standard arm measurements. Comes with a Leathroid bag for convenient storage and portability. Packaged individually in color box.',
      directions: 'Follow standard blood pressure measurement procedures. Wrap the cuff around the upper arm, inflate using the bulb, and read the measurement from the aneroid manometer. Ensure proper positioning and follow medical guidelines for accurate readings.',
      ingredients: [
        { name: 'Aneroid manometer', amount: '1 Unit' },
        { name: 'NYLON cuff (50*14cm)', amount: '1 Unit' },
        { name: 'LATEX bladder (22*12cm)', amount: '1 Unit' },
        { name: 'LATEX bulb', amount: '1 Unit' },
        { name: 'Leathroid bag', amount: '1 Unit' }
      ]
    },
    'prod-6': {
      id: 'prod-6',
      name: 'Electric Heating Pad',
      rating: 4.8,
      reviews: 312,
      questions: 15,
      originalPrice: 3500,
      discountedPrice: 3200,
      images: [
        '/assets/products/other-product/electric-heating-pad.webp'
      ],
      packSize: '1 Unit',
      wellnessCoins: 3200,
      inStock: true,
      helps: [
        'Extra soft surface, breathable and kind to skin',
        'Overheating protection system for safe use',
        '6 temperature settings for personalized comfort'
      ],
      details: 'Electric Heating Pad is a premium heat therapy device designed for comfort and safety. Features include: Extra soft surface that is breathable and kind to skin, LED button switch for easy operation, detachable control unit for convenience, overheating protection system for safety, 6 temperature settings for personalized comfort, automatic switch-off after approximately 90 minutes, illuminated function display for easy monitoring, and machine-washable at 30°C. Dimensions: 47 x 34 cm. Power: 100 Watt. Perfect for heat therapy and physiotherapy applications.',
      directions: 'Place the heating pad on the desired area, select your preferred temperature setting using the control unit, and allow it to heat up. The pad will automatically switch off after approximately 90 minutes for safety. Follow the user manual for proper care and maintenance. Machine washable at 30°C.',
      ingredients: [
        { name: 'Electric Heating Pad', amount: '1 Unit' },
        { name: 'Detachable control unit', amount: '1 Unit' },
        { name: 'Power cord', amount: '1 Unit' },
        { name: 'User manual', amount: '1 Unit' }
      ]
    },
    'prod-7': {
      id: 'prod-7',
      name: 'Certeza Nb-607 Nebulizer Machine',
      rating: 4.9,
      reviews: 428,
      questions: 18,
      originalPrice: 5800,
      discountedPrice: 5300,
      images: [
        '/assets/products/other-product/nebulizer-machne-crtza.webp'
      ],
      packSize: '1 Unit',
      wellnessCoins: 5300,
      inStock: true,
      helps: [
        'Efficiently deliver physician prescribed medication to bronchial lung passages',
        'Helps in successful treatment of asthma, allergies and respiratory disorders',
        'Quick effective treatment with optimal respirable dose delivery'
      ],
      details: 'Certeza Nebulizer Compressor System NB-607 is a compact medical device designed to efficiently deliver physician prescribed medication to the bronchial lung passages. It helps in the successful treatment of asthma, allergies and other respiratory disorders. Features: Compressed air nebulization for treatment of upper and lower airways, colds, asthma, and respiratory diseases. Premium carrying bag included for portability. Optimal respirable dose delivery ensures effective medication administration. Quick effective treatment for rapid relief. Support for wide voltage input for versatile use. Durable quality product built to last. Non-slip body material for safe handling. Built-in medicine cup holder for convenience. Angled-mouth piece for comfortable use. Long tube for flexible positioning. Comes with 3 Year Warranty for peace of mind.',
      directions: 'Follow physician prescribed medication instructions. Fill the medicine cup with the prescribed medication, connect the tube and mouthpiece, turn on the device, and breathe normally through the mouthpiece until the medication is fully administered. Clean all parts after each use as per instructions.',
      ingredients: [
        { name: 'Nebulizer Compressor System', amount: '1 Unit' },
        { name: 'Medicine cup', amount: '1 Unit' },
        { name: 'Angled-mouth piece', amount: '1 Unit' },
        { name: 'Long tube', amount: '1 Unit' },
        { name: 'Premium carrying bag', amount: '1 Unit' },
        { name: 'User manual', amount: '1 Unit' }
      ]
    },
    'prod-8': {
      id: 'prod-8',
      name: 'Nurose Collagen Capsules',
      rating: 4.7,
      reviews: 95,
      questions: 4,
      originalPrice: 1990,
      discountedPrice: 1790,
      images: [
        '/assets/products/product-3.jpeg'
      ],
      packSize: '30 Capsules',
      wellnessCoins: 1790,
      inStock: true,
      helps: [
        'Thicker, healthier hair – thanks to biotin and collagen nourishment',
        'Youthful skin – collagen and vitamin C improve texture and reduce signs of aging',
        'Stronger nails – biotin fortifies nail structure for less splitting'
      ],
      details: 'Nurose Collagen capsules are a dietary supplement packed with Vitamin C (20 mg), Biotin (2500 mcg), and Collagen (1000 mg) in each dose. The blend works to boost beauty and wellness from the inside out. Collagen (1000 mg) supports skin elasticity and joint health, helping you achieve youthful, radiant skin and stronger connective tissues. Biotin (2500 mcg) promotes healthy hair and nails, making them thicker and less prone to breakage. Vitamin C (20 mg) enhances collagen synthesis and acts as an antioxidant, protecting skin cells and boosting overall immunity. Together, these ingredients deliver three key benefits: thicker, healthier hair, youthful skin, and stronger nails. Each pack contains 30 capsules, to be taken daily with a meal for best results. Manufactured by Nurture Pharma, Lahore, and marketed by Biomed Innovation Pharmaceuticals under the DRAP Act 2012.',
      directions: 'Take 1 capsule daily with a meal or as directed by a physician. Do not exceed the recommended daily dose.',
      ingredients: [
        { name: 'Collagen', amount: '1000 mg' },
        { name: 'Biotin', amount: '2500 mcg' },
        { name: 'Vitamin C', amount: '20 mg' }
      ]
    },
    'prod-9': {
      id: 'prod-9',
      name: "BioMed's Teenur",
      rating: 4.6,
      reviews: 112,
      questions: 6,
      originalPrice: 1590,
      discountedPrice: 1440,
      images: [
        '/assets/products/product-4.jpeg'
      ],
      packSize: '30 Tablets',
      wellnessCoins: 1440,
      inStock: true,
      helps: [
        'Hair Growth: strengthens follicles, promotes growth & reduces loss',
        'Nail Health: strengthens nails & reduces breakage',
        'Skin Health: improves hydration, elasticity & texture',
        'Overall Wellness: supports general health, energy & immune function'
      ],
      details: "BioMed's Teenur Biotin + Keratin is a dietary supplement tablet containing Biotin 2500mcg and Hydrolyzed Keratin 250mg. It is designed for adult men and supports hair growth by strengthening follicles, promoting growth and reducing loss. For nail health, it strengthens nails and reduces breakage. It improves skin health by enhancing hydration, elasticity and texture. Keratin benefits include rebuilding hair, strengthening hair and nails, and enhancing skin elasticity. Overall, it supports general health, energy and immune function. Each pack contains 30 tablets, to be taken one tablet daily with a meal or as directed by a physician. Do not exceed the recommended dose. For adult men only. Consult a physician if you are on other medications or have allergies. Discontinue use if any adverse reaction occurs. Keep out of reach of children. Store in a cool, dry place, protected from sunlight, heat and moisture. Manufactured by Nurture Pharma, Lahore, Pakistan. Approved according to DRAP Act 2012.",
      directions: 'Take one tablet daily with a meal or as directed by a physician. Do not exceed the recommended dose. For adult men only. Consult a physician if you are on other medications or have allergies.',
      ingredients: [
        { name: 'Biotin', amount: '2500 mcg' },
        { name: 'Hydrolyzed Keratin', amount: '250 mg' }
      ]
    },
    'prod-10': {
      id: 'prod-10',
      name: 'Magioo Magnesium Glycinate',
      rating: 4.8,
      reviews: 178,
      questions: 8,
      originalPrice: 2250,
      discountedPrice: 2030,
      images: [
        '/assets/products/product-5.jpeg'
      ],
      packSize: '30 Tablets',
      wellnessCoins: 2030,
      inStock: true,
      helps: [
        'Supports sleep quality and restful sleep',
        'Helps nerve and muscle function',
        'Promotes bone and heart health',
        'Enhances nutrient absorption'
      ],
      details: 'Magioo Magnesium Glycinate is a dietary supplement tablet containing 1000 mg of Magnesium Glycinate (USP) per serving. Manufactured by Nurture Pharma, Lahore, Pakistan, and marketed by Biomed Innovation Pharmaceuticals, the product comes in a pack of 30 tablets. Key features and benefits include supporting sleep, helping nerve and muscle function, promoting bone and heart health, and enhancing nutrient absorption. This product is used for the prevention of disease, not for direct treatment. GMP certified and compliant with DRAP Act 2012. For adults only. Consult a healthcare professional if you are pregnant, breastfeeding, or taking other medicines. Discontinue use if allergic or adverse reactions occur. Protect from light, heat and moisture. Store below 30°C in a dry place. Keep out of reach of children and keep the container tightly closed after use.',
      directions: 'Adults take 1 tablet 1–2 times daily with meals, or as directed by a physician. Do not exceed the recommended dose. For adults only. Consult a healthcare professional if you are pregnant, breastfeeding, or taking other medicines. Discontinue use if allergic or adverse reactions occur.',
      ingredients: [
        { name: 'Magnesium Glycinate (USP)', amount: '1000 mg' }
      ]
    },
    'prod-11': {
      id: 'prod-11',
      name: 'VNUR WOMEN Once a Day Multi',
      rating: 4.7,
      reviews: 145,
      questions: 7,
      originalPrice: 2500,
      discountedPrice: 2250,
      images: [
        '/assets/products/product-6.jpeg'
      ],
      packSize: '30 Tablets',
      wellnessCoins: 2250,
      inStock: true,
      helps: [
        'Nutritional support for overall health',
        'Energy metabolism boost',
        'Healthy hair, skin & nails',
        'Immunity enhancement'
      ],
      details: 'Biomed Innovation Pharmaceuticals – VNUR WOMEN Once a Day Multi is a once-daily multivitamin tablet specially formulated for adult women, enriched with Inositol, Alpha Lipoic Acid & Biotin 2500 mcg. Key benefits include nutritional support for overall health, energy metabolism boost, healthy hair, skin & nails, and immunity enhancement. Each tablet contains a comprehensive blend of essential vitamins and minerals including Retinol acetate (Vit A) 2500 IU, Ascorbic acid (Vit C) 100 mg, Cholecalciferol (Vit D3) 800 IU, Alpha tocopherol acetate (Vit E) 30 IU, Thiamine HCL (Vit B1) 1.5 mg, Riboflavin (Vit B2) 2 mg, Niacin (Vit B3) 22 mg, Pyridoxine HCL (Vit B6) 2 mg, Folic acid 600 mcg, Cyanocobalamin (Vit B12) 10 mcg, Biotin 2500 mcg, Calcium Pantothenate 15 mg, Vitamin K2 90 mcg, Inositol 50 mg, Coenzyme Q10 30 mg, and Alpha Lipoic Acid 25 mg. Pack of 30 tablets (serving size = 1 tablet). Complies with DRAP Act 2012; GMP certified. This is a nutraceutical supplement, not a treatment for any disease.',
      directions: 'Take one tablet daily with a meal or as directed by a physician. Do not exceed the recommended dose. For adult women only. Consult a physician if pregnant, breastfeeding, on other medications, or allergic to any ingredient. Stop use and seek medical advice if any adverse reaction occurs.',
      ingredients: [
        { name: 'Retinol acetate (Vit A)', amount: '2500 IU' },
        { name: 'Ascorbic acid (Vit C)', amount: '100 mg' },
        { name: 'Cholecalciferol (Vit D3)', amount: '800 IU' },
        { name: 'Alpha tocopherol acetate (Vit E)', amount: '30 IU' },
        { name: 'Thiamine HCL (Vit B1)', amount: '1.5 mg' },
        { name: 'Riboflavin (Vit B2)', amount: '2 mg' },
        { name: 'Niacin (Vit B3)', amount: '22 mg' },
        { name: 'Pyridoxine HCL (Vit B6)', amount: '2 mg' },
        { name: 'Folic acid', amount: '600 mcg' },
        { name: 'Cyanocobalamin (Vit B12)', amount: '10 mcg' },
        { name: 'Biotin', amount: '2500 mcg' },
        { name: 'Calcium Pantothenate', amount: '15 mg' },
        { name: 'Vitamin K2', amount: '90 mcg' },
        { name: 'Inositol', amount: '50 mg' },
        { name: 'Coenzyme Q10', amount: '30 mg' },
        { name: 'Alpha Lipoic Acid', amount: '25 mg' }
      ]
    },
    'prod-12': {
      id: 'prod-12',
      name: 'DeAll Vitamin D3 200,000 IU & Vitamin K2 Softgel',
      rating: 4.8,
      reviews: 98,
      questions: 5,
      originalPrice: 500,
      discountedPrice: 435,
      images: [
        '/assets/products/product-7-A1.jpeg',
        '/assets/products/product-7-A2.jpeg'
      ],
      packSize: '1 Softgel',
      wellnessCoins: 435,
      inStock: true,
      helps: [
        'Immune Health: Boosts the body\'s natural defense system',
        'Energy & Vitality: Enhances overall energy levels for daily performance',
        'Muscle Health: Supports muscle function and recovery',
        'Bone Health: Promotes calcium utilization for strong bones and teeth'
      ],
      details: 'DeAll is a premium softgel supplement that combines Vitamin D3 (200,000 IU) with Vitamin K2, formulated by BioMed Innovation Pharmaceuticals Pvt Ltd. This powerful blend supports multiple aspects of health, including immune function, energy & vitality, muscle strength, and bone health. Vitamin D3 ensures optimal calcium absorption, while Vitamin K2 directs calcium to the bones and teeth, promoting overall skeletal wellness. The combination of these two essential vitamins works synergistically to support neurological and skeletal health, making DeAll an ideal choice for comprehensive nutritional support.',
      directions: 'Take 1 softgel as directed by a healthcare professional, preferably with a meal for better absorption. Do not exceed the recommended dose. Consult a physician if you are pregnant, breastfeeding, on other medications, or have any medical conditions.',
      ingredients: [
        { name: 'Vitamin D3 (Cholecalciferol)', amount: '200,000 IU' },
        { name: 'Vitamin K2 (Menaquinone)', amount: 'As per formulation' }
      ]
    },
  };

  // Product and allProducts are now fetched from API (see useEffect hooks above)
  // Removed static data - now using API

  // Static allProducts array removed - now using API
  const _allProducts_removed = [
    {
      id: 'prod-1',
      name: 'Magnesium Glycinate | Magnizen',
      rating: 4.5,
      reviews: 120,
      originalPrice: 4500,
      discountedPrice: 3500,
      image: '/assets/products/main-product.jpeg'
    },
    {
      id: 'prod-2',
      name: 'Vanur Men',
      rating: 4.8,
      reviews: 89,
      originalPrice: 2000,
      discountedPrice: 1650,
      image: '/assets/products/product-1.jpeg'
    },
    {
      id: 'prod-3',
      name: 'Vanur Women',
      rating: 4.6,
      reviews: 156,
      originalPrice: 1800,
      discountedPrice: 1500,
      image: '/assets/products/product-2.jpeg'
    },
    {
      id: 'prod-4',
      name: 'Certeza BM-405 Digital Blood Pressure Monitor',
      rating: 4.7,
      reviews: 245,
      originalPrice: 6500,
      discountedPrice: 5950,
      image: '/assets/products/other-product/Certeza-1.webp'
    },
    {
      id: 'prod-5',
      name: 'Bookang – B.P Apparatus Aneroid',
      rating: 4.6,
      reviews: 189,
      originalPrice: 2800,
      discountedPrice: 2500,
      image: '/assets/products/other-product/Bookang.jpg'
    },
    {
      id: 'prod-6',
      name: 'Electric Heating Pad',
      rating: 4.8,
      reviews: 312,
      originalPrice: 3500,
      discountedPrice: 3200,
      image: '/assets/products/other-product/electric-heating-pad.webp'
    },
    {
      id: 'prod-7',
      name: 'Certeza Nb-607 Nebulizer Machine',
      rating: 4.9,
      reviews: 428,
      originalPrice: 5800,
      discountedPrice: 5300,
      image: '/assets/products/other-product/nebulizer-machne-crtza.webp'
    },
    {
      id: 'prod-8',
      name: 'Nurose Collagen Capsules',
      rating: 4.7,
      reviews: 95,
      originalPrice: 1990,
      discountedPrice: 1790,
      image: '/assets/products/product-3.jpeg'
    },
    {
      id: 'prod-9',
      name: "BioMed's Teenur",
      rating: 4.6,
      reviews: 112,
      originalPrice: 1590,
      discountedPrice: 1440,
      image: '/assets/products/product-4.jpeg'
    },
    {
      id: 'prod-10',
      name: 'Magioo Magnesium Glycinate',
      rating: 4.8,
      reviews: 178,
      originalPrice: 2250,
      discountedPrice: 2030,
      image: '/assets/products/product-5.jpeg'
    },
    {
      id: 'prod-11',
      name: 'VNUR WOMEN Once a Day Multi',
      rating: 4.7,
      reviews: 145,
      originalPrice: 2500,
      discountedPrice: 2250,
      image: '/assets/products/product-6.jpeg'
    },
    {
      id: 'prod-12',
      name: 'DeAll Vitamin D3 200,000 IU & Vitamin K2 Softgel',
      rating: 4.8,
      reviews: 98,
      originalPrice: 500,
      discountedPrice: 435,
      image: '/assets/products/product-7-A1.jpeg'
    }
  ]; // Static array removed - now using API

  // Filter out current product and get related products
  const relatedProducts = allProducts.filter(p => p.id !== id).slice(0, 6);

  const certifications = ['ISO', 'GMP', 'DRAP', 'HACCP', 'HALAL', 'NON GMO', 'VEGAN'];

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Loading product...</p>
        </div>
      </div>
    );
  }

  // Show error state if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Product not found</p>
          <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
            Go back to products
          </Link>
        </div>
      </div>
    );
  }

  // Normalize images array
  const productImages = product.images && Array.isArray(product.images) 
    ? product.images 
    : (product.image ? [product.image] : []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Main Product Section */}
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6 mb-6">
          {/* Left Side - Images */}
          <div>
            {/* Main Image/Video - Sticky */}
            <div className="sticky top-4">
              <div className="bg-gray-50 rounded-lg p-8 mb-3 flex items-center justify-center h-[500px]">
                {isVideoMode && product.video ? (
                  <video 
                    src={getVideoUrl(product.video)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-h-full max-w-full object-contain"
                    style={{ pointerEvents: 'none' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={getImageUrl(productImages.length > 0 ? productImages[selectedImage] : product.image)} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
              
              {/* Thumbnail Images - Show if video exists or if more than 1 image */}
              {(product.video || productImages.length > 1) && (
                <div className="flex gap-3">
                  {product.video && (
                    <>
                      {/* Video thumbnail */}
                      <button
                        onClick={() => {
                          setIsVideoMode(true);
                          setSelectedImage(0);
                        }}
                        className={`flex-1 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                          isVideoMode ? 'border-biomed-teal' : 'border-transparent'
                        }`}
                      >
                        <div className="w-full h-16 flex items-center justify-center bg-gray-100 rounded">
                          <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </button>
                      {/* Image thumbnails */}
                      {productImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsVideoMode(false);
                            setSelectedImage(idx);
                          }}
                          className={`flex-1 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                            !isVideoMode && selectedImage === idx ? 'border-biomed-teal' : 'border-transparent'
                          }`}
                        >
                          <img 
                            src={getImageUrl(img)} 
                            alt={`${product.name} ${idx + 1}`}
                            className="w-full h-16 object-contain"
                          />
                        </button>
                      ))}
                    </>
                  )}
                  {!product.video && productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-1 bg-gray-50 rounded-lg p-2 border-2 transition-colors ${
                        selectedImage === idx ? 'border-biomed-teal' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={getImageUrl(img)} 
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-16 object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h1>
            
            {/* Stock Status */}
            <div className="mb-3">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Out of Stock
                </span>
              )}
            </div>
            
            {/* Reviews */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600 ml-1">{product.reviews} reviews</span>
              </div>
              <span className="text-xs text-gray-600">{product.questions} questions</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-biomed-teal">Rs. {product.discountedPrice}</span>
                {product.originalPrice > product.discountedPrice && (
                  <span className="text-base text-gray-400 line-through">Rs. {product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Helps Section */}
            {product.helps && product.helps.length > 0 && (
              <div className="mb-4 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-semibold text-sm mb-2">Helps to:</h3>
                <ul className="space-y-1">
                  {product.helps.map((help, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-biomed-teal text-xs mt-0.5">•</span>
                      <span className="text-xs text-gray-700">{help}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pack Size */}
            {product.packSize && (
              <div className="mb-3">
                <label className="block text-xs font-semibold mb-1">Pack Size:</label>
                <button className="px-4 py-1.5 bg-biomed-navy text-white rounded text-sm font-semibold">
                  {product.packSize}
                </button>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold mb-1">Quantity:</label>
              <div className="flex items-center border rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-1 text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Wellness Coins */}
            {product.wellnessCoins && (
              <div className="mb-4 bg-purple-50 p-3 rounded-lg">
                <p className="text-sm font-semibold text-purple-700">{product.wellnessCoins} Wellness Coins</p>
                <a href="#" className="text-xs text-purple-600 underline">How it works?</a>
              </div>
            )}

            {/* Subtotal */}
            <div className="mb-4">
              <p className="text-base font-semibold">Subtotal: <span className="text-biomed-teal">Rs. {product.discountedPrice * quantity}</span></p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4">
              <button 
                onClick={() => addToCart({...product, quantity, image: product.images && product.images[0] ? product.images[0] : '/assets/products/main-product.jpeg'})}
                disabled={!product.inStock}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 ${
                  product.inStock
                    ? 'bg-gray-800 hover:bg-gray-900 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={16} />
                {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
              </button>
              <button 
                disabled={!product.inStock}
                className={`flex-1 py-2.5 rounded-lg font-semibold text-sm ${
                  product.inStock
                    ? 'bg-white border-2 border-gray-800 hover:bg-gray-50 text-gray-800'
                    : 'bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                }`}
              >
                BUY IT NOW
              </button>
            </div>

            {/* Product Information Accordion */}
            <div className="my-4 border rounded-lg overflow-hidden">
              {/* Product Details */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('details')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Product Details</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.details ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.details ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <div 
                      className="text-xs text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: product.details || '' }}
                    />
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('directions')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Directions</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.directions ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.directions ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <div 
                      className="text-xs text-gray-700"
                      dangerouslySetInnerHTML={{ __html: product.directions || '' }}
                    />
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('ingredients')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Ingredients</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.ingredients ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedSections.ingredients ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-[10px] font-semibold mb-1">Serving Size: One (1) Tablet</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-1 text-[10px]">Each Tablet Contains:</th>
                          <th className="text-left py-1 text-[10px]">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.ingredients && product.ingredients.length > 0 ? product.ingredients.map((ingredient, idx) => (
                          <tr key={idx} className="border-b">
                            <td className="py-1 text-[10px]">{ingredient.name}</td>
                            <td className="py-1 text-[10px]">{ingredient.amount}</td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan="2" className="py-2 text-[10px] text-gray-500 text-center">No ingredients listed</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection('faqs')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">FAQs</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.faqs ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.faqs ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700">Frequently asked questions content goes here...</p>
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div>
                <button
                  onClick={() => toggleSection('reviews')}
                  className="w-full flex items-center justify-between py-2 px-3 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm font-semibold">Customer Reviews</h3>
                  <ChevronDown size={16} className={`transform transition-transform duration-300 ${expandedSections.reviews ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${expandedSections.reviews ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-3 pb-2">
                    <p className="text-xs text-gray-700">Customer reviews will appear here...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
        
          </div>
        </div>


        {/* You May Also Like */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">YOU MAY ALSO LIKE</h2>
          <div className="relative">
            <div 
              ref={relatedScrollRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            >
              {relatedProducts.map((prod) => (
                <Link 
                  key={prod.id} 
                  to={`/product/${prod.id}`}
                  className="min-w-[200px] bg-gray-50 rounded-lg p-3 hover:shadow-lg transition-shadow flex-shrink-0 block"
                >
                  <div className="h-40 flex items-center justify-center mb-3 relative">
                    <img src={prod.image} alt={prod.name} className="max-h-full object-contain" />
                    {prod.originalPrice && prod.discountedPrice && prod.originalPrice > prod.discountedPrice && (
                      <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
                        {Math.round(((prod.originalPrice - prod.discountedPrice) / prod.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2">{prod.name}</h3>
                  <div className="flex items-center gap-1.5 mb-2">
                    {prod.originalPrice && (
                      <span className="text-gray-400 line-through text-xs">Rs. {prod.originalPrice}</span>
                    )}
                    <span className="text-base font-bold text-biomed-teal">Rs. {prod.discountedPrice}</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(prod);
                    }}
                    className="w-full bg-biomed-navy hover:bg-biomed-navy/90 text-white py-1.5 rounded text-xs font-semibold"
                  >
                    Add to Cart
                  </button>
                </Link>
              ))}
            </div>
            <button 
              onClick={scrollRelatedLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={scrollRelatedRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-1.5 hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

