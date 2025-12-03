const Footer = () => {
    return (
      <footer className="border-t border-border/50 mt-20">
        <div className="container-narrow py-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Alessio Boetti. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;  