import { Copyright } from 'lucide-react';
export const Footer = ({ year, company}) => {
    return (
        <footer>
            < Copyright size={16} /> {year} {company}

        </footer>
    )
}