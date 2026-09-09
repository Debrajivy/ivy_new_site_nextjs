import Link from 'next/link';
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Building2, ChevronRight, Facebook, GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone, Star, Twitter, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

const programs = [
  ['Data Science', '/courses/data-science-and-ml-course'],
  ['Data Analytics', '/courses/data-analytics-course'],
  ['Generative AI', '/courses/generative-ai-course'],
  ['Data Engineering', '/courses/data-engineering-course'],
  ['Machine Learning & AI', '/courses/ai-machine-learning-course'],
  ['Data Analytics & Gen AI', '/courses/data-analytics-and-generative-ai-course'],
  ['Data Science (Pay after placement)', '/courses/no-upfront-fees-data-science-and-ml-course'],
];

const business = [
  ['Enterprise Training', '/enterprise'],
  ['AI for Leaders & CXOs', '/enterprise/ai-for-leaders-and-cxos'],
  ['AI for Sales', '/enterprise/ai-for-sales'],
  ['AI for HR Teams', '/enterprise/ai-for-hr-team'],
];

const company = [
  ['About / Enterprise', '/enterprise'],
  ['Testimonials', '/alumni'],
  ['Verify Certificate', '/verify-certificate'],
  ['YouTube Channel', 'https://youtube.com/ivyproschool'],
  ['Contact Us', '/contact-us'],
];

const offices = [
  { city: 'Kolkata', address: '14B, Camac St (5th Floor)' },
  { city: 'Bangalore', address: 'George Thangaiah Complex, Kalyan Nagar, Indira Nagar 1st Stage, H Colony, Indiranagar, Bengaluru, Karnataka 560038' },
  { city: 'Delhi', address: 'Start Works, 1st Floor DCM Building Barakhamba Road' },
  { city: 'Pune', address: 'Shivajinagar, Maharashtra 411016' },
];

const cities = ['Kolkata', 'Delhi', 'Bangalore', 'Mumbai', 'Pune', 'Chennai'];
const directories = [
  { title: 'Data Science Courses', slug: 'data-science-course' },
  { title: 'Data Analytics Courses', slug: 'data-analytics-course' },
  { title: 'Data Engineering Courses', slug: 'data-engineering-course' },
  { title: 'Gen AI Courses', slug: 'generative-ai-course' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://in.linkedin.com/school/ivy-professional-school', Icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/ivyproschool', Icon: Twitter },
  { label: 'Facebook', href: 'https://facebook.com/ivyproschool', Icon: Facebook },
  { label: 'YouTube', href: 'https://youtube.com/ivyproschool', Icon: Youtube },
  { label: 'Instagram', href: 'https://instagram.com/ivyproschool', Icon: Instagram },
];

function FooterLinks({ links }: { links: string[][] }) {
  return <ul className={styles.links}>{links.map(([label, href]) => (
    <li key={href}><Link href={href}><span>{label}</span><ChevronRight size={13} aria-hidden="true" /></Link></li>
  ))}</ul>;
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Ivy Professional School home" className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lovable-uploads/ff3e5927-bf09-4aeb-a4ff-3583075c362e.png" alt="Ivy Professional School" width="82" height="64" />
            </Link>
            <p className={styles.tagline}>Empowering professionals with Data, AI & emerging technology skills since 2008.</p>
            <div className={styles.rating}>
              <span className={styles.stars} aria-hidden="true">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</span>
              <span>4.8/5 from 2,250+ reviews</span>
            </div>
            <div className={styles.community}>
              <p>Join our learning community</p>
              <div className={styles.socials}>{socials.map(({ label, href, Icon }) => <a href={href} aria-label={label} key={label}><Icon size={17} aria-hidden="true" /></a>)}</div>
            </div>
          </div>

          <nav className={styles.column} aria-label="Footer programs">
            <div className={styles.columnHead}><span className={styles.icon}><GraduationCap size={21} aria-hidden="true" /></span><h2>Programs</h2></div>
            <p className={styles.intro}>Future-ready skills for a brighter career.</p>
            <FooterLinks links={programs} />
          </nav>
          <nav className={styles.column} aria-label="Footer business">
            <div className={styles.columnHead}><span className={styles.icon}><BriefcaseBusiness size={20} aria-hidden="true" /></span><h2>For Business</h2></div>
            <p className={styles.intro}>Practical AI learning for forward-thinking teams.</p>
            <FooterLinks links={business} />
          </nav>
          <nav className={styles.column} aria-label="Footer company">
            <div className={styles.columnHead}><span className={styles.icon}><Building2 size={20} aria-hidden="true" /></span><h2>Company</h2></div>
            <p className={styles.intro}>People, purpose and progress.</p>
            <FooterLinks links={company} />
          </nav>
          <div className={`${styles.column} ${styles.contact}`}>
            <div className={styles.columnHead}><span className={styles.icon}><Phone size={19} aria-hidden="true" /></span><h2>Let’s connect</h2></div>
            <p className={styles.intro}>Your next chapter starts with a conversation.</p>
            <a className={styles.contactLink} href="mailto:info@ivyproschool.com"><Mail size={17} aria-hidden="true" /><span>info@ivyproschool.com</span></a>
            <a className={styles.contactLink} href="tel:+917676882222"><Phone size={16} aria-hidden="true" /><span>+91 7676882222</span></a>
            <Link href="/contact-us" className={styles.contactCta}>Find your next step <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>

        <section className={styles.locations} aria-labelledby="footer-locations">
          <div className={styles.sectionLabel}><MapPin size={25} aria-hidden="true" /><div><h2 id="footer-locations">Our locations</h2><p>Learning hubs across India</p></div></div>
          <div className={styles.cityList}>{offices.map(({ city, address }) => (
            <a key={city} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Ivy Professional School ${address} ${city}`)}`} title={`${city}: ${address}`} target="_blank" rel="noopener noreferrer"><Building2 size={20} aria-hidden="true" /><div className={styles.officeDetails}><strong>{city}</strong><address>{address}</address></div><ArrowUpRight size={12} aria-hidden="true" /></a>
          ))}</div>
          <Link href="/contact-us" className={styles.allLocations}>View all locations <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>

        <section className={styles.directory} aria-labelledby="footer-directory">
          <div className={styles.sectionLabel}><BarChart3 size={25} aria-hidden="true" /><div><h2 id="footer-directory">Popular courses by city</h2><p>Find your program, closer to you.</p></div></div>
          <div className={styles.directoryGrid}>{directories.map(({ title, slug }) => (
            <nav className={styles.cityCourses} aria-label={title + ' by city'} key={slug}>
              <h3>{title}</h3>
              <ul className={styles.links}>{cities.map(city => <li key={city}><Link href={`/courses/${slug}-${city.toLowerCase()}`} aria-label={`${title} in ${city}`}><span>In {city}</span><ChevronRight size={12} aria-hidden="true" /></Link></li>)}</ul>
            </nav>
          ))}</div>
        </section>
      </div>
      <div className={styles.bottom}>
        <div className={styles.shell}>
          <p>© {new Date().getFullYear()} Ivy Professional School. All rights reserved.</p>
          <nav aria-label="Footer legal"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link><Link href="/sitemap.xml">Sitemap</Link></nav>
        </div>
      </div>
    </footer>
  );
}
