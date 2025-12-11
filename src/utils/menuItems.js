
import {
    FileText, User, Printer, Book, LayoutTemplate, PenTool, Heart,
    Users, Monitor, ListChecks, AlertCircle, FilePlus, PlusCircle,
    Trash2, PieChart, ClipboardList, BarChart, ArrowLeft, Sparkles, ShieldCheck, FileSignature, Edit3, Brain
} from 'lucide-react';

export const MENU_ITEMS = [
    { id: 'datos-generales', icon: User, label: 'Datos Generales' },
    { id: 'historia-clinica', icon: Book, label: 'Historia Clínica' },
    { id: 'familiograma', icon: Users, label: 'Familiograma' },
    { id: 'esferas', icon: PieChart, label: 'Esferas de Vida' },
    { id: 'ceper', icon: ClipboardList, label: 'Cuestionario CEPER' },
    { id: 'hama', icon: Heart, label: 'Ansiedad (HAM-A)' },
    { id: 'bdi', icon: AlertCircle, label: 'Depresión (BDI-II)' },
    { id: 'otis', icon: ListChecks, label: 'Inteligencia (OTIS)' },
    { id: 'machover', icon: PenTool, label: 'Machover (DFH)' },
    { id: 'notas', icon: FilePlus, label: 'Notas Clínicas' },
    { id: 'informe', icon: FileText, label: 'Informe Final' },
];
