import { useState } from "react";
import { Menu, X, ChevronDown, FileText, BookOpen, Download, HelpCircle, Smartphone, Phone, Mail, MapPin, Sun, Moon, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-sorriso.jpg";
import iconGoverno from "@/assets/icon-governo.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigation = [
    { name: 'Início', href: '#inicio' },
    { name: 'O que é NFS-e', href: '#sobre' },
    { name: 'Legislação', href: '#legislacao' },
    { name: 'Como Emitir', href: '#emitir' },
    { name: 'Aplicativos', href: '#apps' },
    { name: 'Suporte', href: '#suporte' },
  ];

  const services = [
    {
      icon: FileText,
      title: "Emitir NFS-e",
      description: "Acesse o sistema para emissão de notas fiscais de serviço eletrônicas",
      link: "#emitir"
    },
    {
      icon: BookOpen,
      title: "Consultar NFS-e",
      description: "Consulte notas fiscais emitidas e verifique sua autenticidade",
      link: "#consultar"
    },
    {
      icon: Download,
      title: "Legislação",
      description: "Acesse leis municipais, decretos e instruções normativas",
      link: "#legislacao"
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description: "Baixe aplicativos móveis para facilitar a gestão das suas notas",
      link: "#apps"
    },
    {
      icon: HelpCircle,
      title: "Perguntas Frequentes",
      description: "Tire suas dúvidas sobre emissão e gestão de NFS-e",
      link: "#faq"
    },
    {
      icon: Phone,
      title: "Atendimento",
      description: "Entre em contato com a Secretaria da Fazenda",
      link: "#contato"
    }
  ];

  const faqs = [
    {
      question: "O que é a Nota Fiscal de Serviço Eletrônica (NFS-e)?",
      answer: "A NFS-e é um documento fiscal digital que substitui a nota fiscal em papel para prestadores de serviços. Ela é gerada eletronicamente e permite maior controle fiscal pelo município, além de simplificar o processo para empresas e profissionais autônomos."
    },
    {
      question: "Quem é obrigado a emitir NFS-e em Sorriso?",
      answer: "Todos os prestadores de serviços estabelecidos no município de Sorriso-MT são obrigados a emitir NFS-e, conforme legislação municipal vigente. Isso inclui empresas, profissionais liberais e autônomos que prestem serviços sujeitos ao ISS."
    },
    {
      question: "Como faço para me cadastrar no sistema de NFS-e?",
      answer: "O cadastro deve ser realizado através do portal da Prefeitura de Sorriso, na área de serviços tributários. Você precisará do CNPJ ou CPF, inscrição municipal e documentos comprobatórios. Após o cadastro, receberá login e senha de acesso ao sistema."
    },
    {
      question: "Qual o prazo para emissão da NFS-e?",
      answer: "A NFS-e deve ser emitida no momento da prestação do serviço ou até o dia seguinte. O não cumprimento deste prazo pode resultar em multas conforme o Código Tributário Municipal."
    },
    {
      question: "Posso cancelar uma NFS-e emitida?",
      answer: "Sim, é possível cancelar uma NFS-e desde que observadas as condições estabelecidas na legislação municipal. O cancelamento geralmente deve ser solicitado dentro de um prazo específico após a emissão e pode estar sujeito à aprovação da Secretaria da Fazenda."
    },
    {
      question: "Como consulto uma NFS-e?",
      answer: "A consulta pode ser feita através do portal da Prefeitura, utilizando o número da nota fiscal e o código de verificação. Tanto o prestador quanto o tomador do serviço podem consultar e baixar a NFS-e."
    }
  ];

  const legislation = [
    {
      title: "Portal NFS-e Nacional",
      description: "Sistema nacional de emissão de Notas Fiscais de Serviço Eletrônicas",
      type: "Portal Gov.br",
      url: "https://www.gov.br/nfse"
    },
    {
      title: "SEFAZ Mato Grosso",
      description: "Secretaria de Estado de Fazenda - Legislação tributária estadual",
      type: "Portal Estadual",
      url: "http://www.sefaz.mt.gov.br/"
    },
    {
      title: "Portal da Transparência - Sorriso",
      description: "Acesse informações públicas e dados oficiais do município",
      type: "Portal Municipal",
      url: "https://www.sorriso.mt.gov.br/"
    },
    {
      title: "Receita Federal - E-CAC",
      description: "Centro Virtual de Atendimento ao Contribuinte da Receita Federal",
      type: "Portal Federal",
      url: "https://www.gov.br/receitafederal/pt-br/canais_atendimento/atendimento-virtual-e-cac"
    },
    {
      title: "Portal Nacional da Transparência",
      description: "Transparência e controle dos gastos públicos federais",
      type: "Portal Federal",
      url: "https://www.portaltransparencia.gov.br/"
    },
    {
      title: "Gov.br - Serviços Digitais",
      description: "Portal único de serviços e informações do governo federal",
      type: "Portal Gov.br",
      url: "https://www.gov.br/"
    }
  ];

  const apps = [
    {
      name: "Portal NFS-e Nacional",
      description: "Sistema oficial de emissão de NFS-e do Governo Federal",
      platform: "Web",
      features: ["Emissão nacional", "Consulta unificada", "Integração estados", "Certificação digital"],
      url: "https://www.gov.br/nfse"
    },
    {
      name: "App Gov.br",
      description: "Aplicativo oficial do governo federal com serviços integrados",
      platform: "Android/iOS",
      features: ["Acesso unificado", "Documentos digitais", "Serviços públicos", "Autenticação segura"],
      urlAndroid: "https://play.google.com/store/apps/details?id=br.gov.meugovbr",
      urlIOS: "https://apps.apple.com/br/app/gov-br/id1511624009"
    },
    {
      name: "e-CAC - Receita Federal",
      description: "Centro de Atendimento Virtual da Receita Federal do Brasil",
      platform: "Web",
      features: ["Consultas fiscais", "Certidões", "Declarações", "Processos"],
      url: "https://www.gov.br/receitafederal/pt-br/canais_atendimento/atendimento-virtual-e-cac"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Skip to content */}
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg">
        Ir para o conteúdo principal
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Prefeitura de Sorriso</span>
                <span className="text-xs text-muted-foreground">Portal NFS-e</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Alternar tema"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                aria-label="Alternar tema"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main id="conteudo">
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Campos de Sorriso - Capital do Agronegócio" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,143,90,0.2),transparent_50%)]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white shadow-lg">
                <img src={iconGoverno} alt="" className="h-5 w-5" />
                Portal Oficial da Prefeitura de Sorriso-MT
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                Nota Fiscal de Serviço Eletrônica
              </h1>
              <p className="mb-8 text-lg text-white/95 md:text-xl drop-shadow-md font-medium">
                Central completa de informações, serviços e suporte para emissão de NFS-e no município de Sorriso. 
                Legislação oficial, portais governamentais, tutoriais e atendimento unificado.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-xl" asChild>
                  <a href="#emitir">
                    <FileText className="h-5 w-5" />
                    Acessar Portal NFS-e
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" asChild>
                  <a href="#sobre">
                    Saiba Mais
                    <ChevronDown className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Stats/Features badges */}
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {[
                  { icon: CheckCircle2, label: "100% Digital" },
                  { icon: FileText, label: "Emissão Rápida" },
                  { icon: ExternalLink, label: "Links Oficiais" },
                  { icon: HelpCircle, label: "Suporte Total" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm p-4">
                    <item.icon className="h-6 w-6 text-white" />
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Serviços Disponíveis
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Acesse todos os recursos necessários para gestão da sua Nota Fiscal Eletrônica
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-2 border-2 hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      Acessar <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About NFS-e */}
        <section id="sobre" className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">O que é a NFS-e?</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  A Nota Fiscal de Serviço Eletrônica (NFS-e) é um documento fiscal digital que substitui 
                  as antigas notas fiscais em papel. Implementada no município de Sorriso-MT, ela representa 
                  um avanço na modernização dos serviços públicos e na gestão tributária municipal.
                </p>
                <p>
                  Sorriso, reconhecida como uma das maiores produtoras de grãos do Brasil e polo do agronegócio 
                  mato-grossense, adota este sistema para facilitar a vida dos prestadores de serviços locais, 
                  desde grandes empresas do setor agrícola até profissionais autônomos.
                </p>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-4 text-xl font-bold text-card-foreground">Vantagens da NFS-e</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-card-foreground">Redução de custos com impressão e armazenamento de notas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-card-foreground">Maior agilidade na emissão e transmissão de documentos fiscais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-card-foreground">Segurança jurídica com assinatura digital e armazenamento em nuvem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-card-foreground">Contribuição para a sustentabilidade ambiental</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-card-foreground">Facilidade de consulta e arquivamento digital</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legislation */}
        <section id="legislacao" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Legislação e Normas</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Base legal e documentos normativos sobre a NFS-e em Sorriso-MT
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {legislation.map((item, index) => (
                <Card key={index} className="group transition-all hover:shadow-lg hover:border-primary/50 border-2">
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                    <div className="flex-1">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                        <ExternalLink className="h-3 w-3" />
                        {item.type}
                      </div>
                      <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="gap-2 group-hover:shadow-lg transition-all" 
                      asChild
                    >
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Acessar Portal Oficial
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Issue */}
        <section id="emitir" className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">Como Emitir sua NFS-e</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                      Cadastro no Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Realize seu cadastro no portal da Prefeitura com CNPJ/CPF e inscrição municipal. O processo é rápido e você receberá suas credenciais de acesso por e-mail.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                      Acesso ao Sistema
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Entre no sistema com seu login e senha. Você pode acessar via navegador web ou baixar o aplicativo móvel para maior comodidade.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                      Preenchimento dos Dados
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Preencha as informações do serviço prestado: descrição, valor, tomador do serviço, código de tributação e demais dados obrigatórios. O sistema valida automaticamente as informações.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">4</span>
                      Emissão e Transmissão
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Após conferir os dados, clique em "Emitir NFS-e". A nota será gerada instantaneamente e enviada automaticamente para o e-mail do tomador. Você também pode baixar o PDF da nota.</p>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Acessar Sistema de Emissão
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Aplicativos e Ferramentas</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Baixe os aplicativos oficiais e acesse ferramentas para facilitar a gestão da sua NFS-e
              </p>
            </div>
            <div className="mx-auto max-w-4xl space-y-6">
              {apps.map((app, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <div className="md:flex">
                    <div className="flex-1 p-6 md:p-8">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
                        <Smartphone className="h-3 w-3" />
                        {app.platform}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold">{app.name}</h3>
                      <p className="mb-4 text-muted-foreground text-base">{app.description}</p>
                      <div className="mb-6">
                        <p className="mb-3 text-sm font-semibold">Recursos disponíveis:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {app.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {app.url && (
                          <Button variant="default" size="lg" className="gap-2" asChild>
                            <a href={app.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              Acessar Portal
                            </a>
                          </Button>
                        )}
                        {app.urlAndroid && (
                          <Button variant="outline" size="lg" className="gap-2" asChild>
                            <a href={app.urlAndroid} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4" />
                              Android
                            </a>
                          </Button>
                        )}
                        {app.urlIOS && (
                          <Button variant="outline" size="lg" className="gap-2" asChild>
                            <a href={app.urlIOS} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4" />
                              iOS
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Tire suas dúvidas sobre a Nota Fiscal Eletrônica em Sorriso
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Support/Contact */}
        <section id="suporte" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Suporte e Atendimento</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Entre em contato com a Secretaria Municipal da Fazenda de Sorriso
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+556635453000" className="mb-2 text-xl font-semibold text-primary hover:underline block">
                    (66) 3545-3000
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 7h30 às 13h30
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:nfse@sorriso.mt.gov.br" className="mb-2 text-xl font-semibold text-primary hover:underline block">
                    nfse@sorriso.mt.gov.br
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Resposta em até 48 horas úteis
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 font-semibold text-lg">Secretaria Municipal da Fazenda</p>
                  <p className="text-muted-foreground mb-4">
                    Avenida dos Emancipadores, 100 - Centro<br />
                    Sorriso - MT, CEP: 78890-000
                  </p>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://maps.google.com/?q=Prefeitura+Sorriso+MT" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Ver no Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold">Prefeitura de Sorriso</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Portal oficial de informações sobre Nota Fiscal de Serviço Eletrônica do município de Sorriso - Mato Grosso.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.sorriso.mt.gov.br/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Site Oficial
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gov.br/nfse" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">Portal NFS-e Nacional <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="http://www.sefaz.mt.gov.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">SEFAZ MT <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="https://www.gov.br/receitafederal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">Receita Federal <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Transparência</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.portaltransparencia.gov.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">Portal da Transparência <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="https://www.gov.br/acessoainformacao/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">Acesso à Informação <ExternalLink className="h-3 w-3" /></a></li>
                <li><a href="https://www.sorriso.mt.gov.br/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary inline-flex items-center gap-1">Ouvidoria <ExternalLink className="h-3 w-3" /></a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Prefeitura Municipal de Sorriso - MT. Todos os direitos reservados.</p>
            <p className="mt-2">Capital do Agronegócio - Sorriso, Mato Grosso</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
