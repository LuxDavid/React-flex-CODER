import {getFirestore, getDocs, collection} from 'firebase/firestore';
import { app } from './config.js';


const db = getFirestore(app);