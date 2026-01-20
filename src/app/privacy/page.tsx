import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for KOVentures Hub and KO Energy. We are committed to protecting your data.',
  openGraph: {
    title: 'KO Energy | Privacy Policy',
    description: 'Privacy Policy for KO Energy. We are committed to protecting your data.',
    url: 'https://koenergy.uk/privacy',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary/5 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-headline font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-foreground/70">Last updated: January 20, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl prose prose-neutral dark:prose-invert">
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <p>
                <strong>KOVENTURES LTD</strong>is a company registered in England and Wales (Company Number: 16961806). Here, we are committed to protecting your privacy and ensuring your personal data is handled in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Data Controller</h2>
                <p>KOVENTURES LTD is the data controller responsible for your personal data.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Data Collection</h2>
                <p>We only collect data that you voluntarily provide through our contact form (Name, Company, Email, Sector, Message). We may also collect technical data such as your IP address and browsing behavior through cookies to improve our website experience.</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Data Usage</h2>
                <p>Your data is used solely to respond to your enquiries, discuss potential projects, and provide you with information you have requested. We process this data based on our legitimate interests in communicating with potential partners and clients.</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Data Retention</h2>
                <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Your Rights</h2>
                <p>Under GDPR, you have the right to access, correct, or erase your personal data, as well as the right to restrict or object to certain types of processing. You also have the right to data portability.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Third Parties</h2>
                <p>We do not sell or share your data with third parties for marketing purposes. We may share data with trusted service providers who assist us in operating our website, so long as those parties agree to keep this information confidential.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-headline font-bold text-primary">Contacting Us</h2>
                <p>
                  If you have any questions about this privacy policy or our treatment of your personal data, please write to us by email at{' '}
                  <a href="mailto:koventures-partnership@outlook.com" className="text-primary hover:underline">
                    koventures-partnership@outlook.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
