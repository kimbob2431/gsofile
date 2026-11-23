(function () {
  const HISTORY_KEY = 'maragondon_abstract_history_v1';
  const CERT_HISTORY_KEY = 'maragondon_certificate_history_v1';
  const RFQ_HISTORY_KEY = 'maragondon_rfq_history_v1';
  const PR_HISTORY_KEY = 'maragondon_pr_history_v1';
  const PO_HISTORY_KEY = 'maragondon_po_history_v1';
  const LOGO_KEY = 'maragondon_custom_logo_v1';

  const DEFAULT_SIGNATORIES = {
    chairmanName: 'ENGR. ALDWIN JESTER A. ANCAYAN',
    chairmanTitle: 'BAC CHAIRMAN/MUN. ENGINEER',
    viceChairmanName: 'CHERRYL I. ESQUILLO',
    viceChairmanTitle: 'BAC VICE-CHAIRMAN/MUN. BUDGET OFFICER',
    member1Name: 'REGINO S. REYES',
    member1Title: 'BAC MEMBER/MUN. AGRICULTURIST',
    member2Name: 'GERARDO Z. RIELO JR.',
    member2Title: 'BAC MEMBER/MDRRMO',
    member3Name: 'ENGR. ENP. PERCIVAL M. MALIMBAN',
    member3Title: 'BAC MEMBER/MUN. PLANNING & DEV’T COORDINATOR',
  };

  const PO_SAMPLES = [
    {
      referenceTitle: 'PO-007A-2025-Maharlika',
      supplier: "MAHARLIKA'S RESTAURANT",
      address: 'Maragondon, Cavite',
      tin: '',
      poNo: '',
      poDate: '',
      modeOfProcurement: 'N/P Sec.53.9 SVP',
      prNos: '007A-2025',
      placeOfDelivery: 'Maragondon, Cavite',
      dateOfDelivery: '',
      deliveryTerm: 'FOD',
      paymentTerm: '30 days upon delivery term',
      items: [
        { id: 'po-1', stockNo: '', unit: '', description: '13- Aug,25', quantity: '', unitCost: '', amount: '', isCenteredHeader: true },
        { id: 'po-2', stockNo: '', unit: '', description: 'Am Snack: Sandwich and bottled water', quantity: '15', unitCost: '120.00', amount: '1,800.00', isCenteredHeader: false },
        { id: 'po-3', stockNo: '', unit: '', description: 'Lunch: rice, menudo, chopsuey, saging, water', quantity: '15', unitCost: '160.00', amount: '2,400.00', isCenteredHeader: false },
        { id: 'po-4', stockNo: '', unit: '', description: '', quantity: '', unitCost: '', amount: '', isCenteredHeader: false },
        { id: 'po-5', stockNo: '', unit: '', description: '14- Aug.25', quantity: '', unitCost: '', amount: '', isCenteredHeader: true },
        { id: 'po-6', stockNo: '', unit: '', description: 'Am Snack: pansit with water', quantity: '15', unitCost: '120.00', amount: '1,800.00', isCenteredHeader: false },
        { id: 'po-7', stockNo: '', unit: '', description: 'Lunch: rice, adobo, saging, water', quantity: '15', unitCost: '120.00', amount: '1,800.00', isCenteredHeader: false },
      ],
      autoAmountInWords: true,
      amountInWords: 'Seven thousand eight hundred pesos.',
      conformeSupplierName: "MAHARLIKA'S RESTAURANT",
      conformeDate: '',
      authorizedOfficialName: 'HON. LAWRENCE N. ARCA',
      authorizedOfficialDesignation: 'Municipal Mayor',
      sanggunianResNo: '',
      sanggunianSecretaryName: '',
      sanggunianSecretaryLabel: 'Secretary to the Sanggunian',
      sanggunianDate: '',
      paperSize: 'a4',
    },
    {
      referenceTitle: 'PO-054-2026-Auto-Supply',
      supplier: 'CAVITE MOTOR PARTS & AUTO SUPPLY',
      address: 'Naic, Cavite',
      tin: '412-889-210-000',
      poNo: 'PO-2026-054',
      poDate: 'July 30, 2026',
      modeOfProcurement: 'N/P Sec.53.9 SVP',
      prNos: '054-2026',
      placeOfDelivery: 'Maragondon, Cavite',
      dateOfDelivery: 'Within 7 calendar days',
      deliveryTerm: 'FOD',
      paymentTerm: '30 days upon delivery term',
      items: [
        { id: 'po-s2-1', stockNo: '1', unit: 'pc', description: 'alternator pulley', quantity: '1', unitCost: '2,500.00', amount: '2,500.00', isCenteredHeader: false },
        { id: 'po-s2-2', stockNo: '2', unit: 'pcs', description: 'oil filter', quantity: '6', unitCost: '500.00', amount: '3,000.00', isCenteredHeader: false },
        { id: 'po-s2-3', stockNo: '3', unit: 'gal', description: 'engine oil', quantity: '1', unitCost: '1,020.00', amount: '1,020.00', isCenteredHeader: false },
        { id: 'po-s2-4', stockNo: '4', unit: 'pail', description: 'delo gold engine oil', quantity: '4', unitCost: '4,200.00', amount: '16,800.00', isCenteredHeader: false },
      ],
      autoAmountInWords: true,
      amountInWords: 'Twenty-three thousand three hundred twenty pesos.',
      conformeSupplierName: 'CAVITE MOTOR PARTS & AUTO SUPPLY',
      conformeDate: '',
      authorizedOfficialName: 'HON. LAWRENCE N. ARCA',
      authorizedOfficialDesignation: 'Municipal Mayor',
      sanggunianResNo: '',
      sanggunianSecretaryName: '',
      sanggunianSecretaryLabel: 'Secretary to the Sanggunian',
      sanggunianDate: '',
      paperSize: 'a4',
    },
    {
      referenceTitle: 'PO-061-2026-RMP-Dry-Goods',
      supplier: 'R.M.P DRY GOODS STORE',
      address: 'Maragondon, Cavite',
      tin: '',
      poNo: 'PO-2026-061',
      poDate: 'August 15, 2026',
      modeOfProcurement: 'N/P Sec.53.9 SVP',
      prNos: '061-2026',
      placeOfDelivery: 'Maragondon, Cavite',
      dateOfDelivery: '',
      deliveryTerm: 'FOD',
      paymentTerm: '30 days upon delivery term',
      items: [
        { id: 'po-s3-1', stockNo: '1', unit: 'box', description: 'Bond Paper A4 80gsm (5 reams/box)', quantity: '10', unitCost: '1,250.00', amount: '12,500.00', isCenteredHeader: false },
        { id: 'po-s3-2', stockNo: '2', unit: 'box', description: 'Ballpen Black 0.5mm (12 pcs/box)', quantity: '15', unitCost: '180.00', amount: '2,700.00', isCenteredHeader: false },
        { id: 'po-s3-3', stockNo: '3', unit: 'pack', description: 'Folder Legal Cream (100 pcs/pack)', quantity: '4', unitCost: '650.00', amount: '2,600.00', isCenteredHeader: false },
      ],
      autoAmountInWords: true,
      amountInWords: 'Seventeen thousand eight hundred pesos.',
      conformeSupplierName: 'R.M.P DRY GOODS STORE',
      conformeDate: '',
      authorizedOfficialName: 'HON. LAWRENCE N. ARCA',
      authorizedOfficialDesignation: 'Municipal Mayor',
      sanggunianResNo: '',
      sanggunianSecretaryName: '',
      sanggunianSecretaryLabel: 'Secretary to the Sanggunian',
      sanggunianDate: '',
      paperSize: 'a4',
    },
  ];

  const PR_SAMPLES = [
    {
      referenceTitle: 'PR-054-2026-Ambulance-Patrol',
      fund: '',
      department: '',
      section: '',
      prNo: '054-2026',
      fpp: '',
      prDate: '7/28/2026',
      sectionDate: '',
      items: [
        { id: 'pr-1', itemNo: '', unit: 'pc', description: 'alternator pulley', quantity: '1', unitCost: '2,500.00', totalCost: '2,500.00' },
        { id: 'pr-2', itemNo: '', unit: 'pcs', description: 'oil filter', quantity: '6', unitCost: '500.00', totalCost: '3,000.00' },
        { id: 'pr-3', itemNo: '', unit: 'gal', description: 'engine oil', quantity: '1', unitCost: '1,020.00', totalCost: '1,020.00' },
        { id: 'pr-4', itemNo: '', unit: 'pail', description: 'delo gold engine oil', quantity: '4', unitCost: '4,200.00', totalCost: '16,800.00' },
      ],
      purpose: 'For the repair and maintenance of ambulance with plate no. SDB 2704 and change oil of PNP patrol vehicle and truck with plate no. SJJ 319, truck no.1 and 2.',
      certifiedByName: 'NOAH M. CAASI',
      certifiedByPosition: 'BAC Secretary',
      requestedByLabel: 'Requested by:',
      requestedByName: 'HERMINIA M. QUENERI',
      requestedByDesignation: 'Municipal GSO',
      cashAvailLabel: 'Cash Availability:',
      cashAvailName: 'JOVITA A. NOVELO',
      cashAvailDesignation: 'Acting Mun. Treasurer',
      approvedByLabel: 'Approved by:',
      approvedByName: 'HON. LAWRENCE N. ARCA',
      approvedByDesignation: 'Municipal Mayor',
      paperSize: 'legal',
    },
    {
      referenceTitle: 'PR-061-2026-Office-Supplies',
      fund: '',
      department: 'MTO',
      section: '',
      prNo: '061-2026',
      fpp: '',
      prDate: '8/12/2026',
      sectionDate: '',
      items: [
        { id: 'pr-s2-1', itemNo: '1', unit: 'box', description: 'Bond Paper A4 80gsm (5 reams/box)', quantity: '10', unitCost: '1,250.00', totalCost: '12,500.00' },
        { id: 'pr-s2-2', itemNo: '2', unit: 'box', description: 'Ballpen Black 0.5mm (12 pcs/box)', quantity: '15', unitCost: '180.00', totalCost: '2,700.00' },
        { id: 'pr-s2-3', itemNo: '3', unit: 'pack', description: 'Folder Legal Cream (100 pcs/pack)', quantity: '4', unitCost: '650.00', totalCost: '2,600.00' },
      ],
      purpose: 'For the official office supplies consumption of the Municipal Treasurer’s Office, LGU Maragondon, Cavite.',
      certifiedByName: 'NOAH M. CAASI',
      certifiedByPosition: 'BAC Secretary',
      requestedByLabel: 'Requested by:',
      requestedByName: 'JOVITA A. NOVELO',
      requestedByDesignation: 'Acting Mun. Treasurer',
      cashAvailLabel: 'Cash Availability:',
      cashAvailName: 'JOVITA A. NOVELO',
      cashAvailDesignation: 'Acting Mun. Treasurer',
      approvedByLabel: 'Approved by:',
      approvedByName: 'HON. LAWRENCE N. ARCA',
      approvedByDesignation: 'Municipal Mayor',
      paperSize: 'legal',
    },
    {
      referenceTitle: 'PR-072-2026-Meals-Tarpaulin',
      fund: '',
      department: 'PESO / GSO',
      section: '',
      prNo: '072-2026',
      fpp: '',
      prDate: '9/05/2026',
      sectionDate: '',
      items: [
        { id: 'pr-s3-1', itemNo: '1', unit: 'pax', description: 'AM Snack and Lunch for Seminar Participants', quantity: '60', unitCost: '280.00', totalCost: '16,800.00' },
        { id: 'pr-s3-2', itemNo: '2', unit: 'pcs', description: 'Tarpaulin 4ft x 8ft with eyelets', quantity: '5', unitCost: '200.00', totalCost: '1,000.00' },
      ],
      purpose: 'For meals and tarpaulin printing during the Orientation on Government Procurement and Livelihood Program in LGU Maragondon, Cavite.',
      certifiedByName: 'NOAH M. CAASI',
      certifiedByPosition: 'BAC Secretary',
      requestedByLabel: 'Requested by:',
      requestedByName: 'RIA KRIS O. TIBAYAN',
      requestedByDesignation: 'OIC PESO',
      cashAvailLabel: 'Cash Availability:',
      cashAvailName: 'JOVITA A. NOVELO',
      cashAvailDesignation: 'Acting Mun. Treasurer',
      approvedByLabel: 'Approved by:',
      approvedByName: 'HON. LAWRENCE N. ARCA',
      approvedByDesignation: 'Municipal Mayor',
      paperSize: 'legal',
    },
  ];

  const RFQ_SAMPLES = [
    {
      referenceTitle: 'RFQ-RMP-Meals-Aug2025',
      date: '',
      quotationNo: '',
      supplierName: 'R.M.P DRY GOODS STORE',
      supplierAddress: 'Maragondon, Cavite',
      submissionDeadline: '',
      signatoryName: 'NOAH M. CAASI',
      signatoryPosition: 'Municipal Administrator',
      items: [
        { id: 'rfq-1', itemNo: '', description: '13- Aug,25', quantity: '', unitCost: '', totalAmount: '', isCenteredHeader: true },
        { id: 'rfq-2', itemNo: '', description: 'Am Snack: Sandwich and bottled water', quantity: '15', unitCost: '120.00', totalAmount: '1,800.00', isCenteredHeader: false },
        { id: 'rfq-3', itemNo: '', description: 'Lunch: rice, menudo, chopsuey, saging, water', quantity: '15', unitCost: '160.00', totalAmount: '2,400.00', isCenteredHeader: false },
        { id: 'rfq-4', itemNo: '', description: '', quantity: '', unitCost: '', totalAmount: '', isCenteredHeader: false },
        { id: 'rfq-5', itemNo: '', description: '14- Aug.25', quantity: '', unitCost: '', totalAmount: '', isCenteredHeader: true },
        { id: 'rfq-6', itemNo: '', description: 'Am Snack: pansit with water', quantity: '15', unitCost: '120.00', totalAmount: '1,800.00', isCenteredHeader: false },
        { id: 'rfq-7', itemNo: '', description: 'Lunch: rice, adobo, saging, water', quantity: '15', unitCost: '120.00', totalAmount: '1,800.00', isCenteredHeader: false },
      ],
      brandAndModel: '',
      deliveryPeriod: '',
      warranty: '',
      priceValidity: '',
      paperSize: 'legal',
    },
    {
      referenceTitle: 'RFQ-RBK-Tarpaulin-PWD',
      date: '',
      quotationNo: '',
      supplierName: 'RBK PRINTING SERVICES',
      supplierAddress: 'Bucal 1, Maragondon, Cavite',
      submissionDeadline: '',
      signatoryName: 'HERMINIA M. QUENERI',
      signatoryPosition: 'Mun. General Service Officer',
      items: [
        { id: 'rfq-s2-1', itemNo: '1', description: 'Tarpaulin 4ft x 8ft with eyelets (Give a Gift for Indigent PWD)', quantity: '5', unitCost: '200.00', totalAmount: '1,000.00', isCenteredHeader: false },
      ],
      brandAndModel: '',
      deliveryPeriod: '',
      warranty: '',
      priceValidity: '',
      paperSize: 'legal',
    },
    {
      referenceTitle: 'RFQ-YSA-Supplies-MTO',
      date: '',
      quotationNo: '',
      supplierName: 'YSA & RAIN MERCHANDISE',
      supplierAddress: 'Maragondon, Cavite',
      submissionDeadline: '',
      signatoryName: 'NOAH M. CAASI',
      signatoryPosition: 'Municipal Administrator',
      items: [
        { id: 'rfq-s3-1', itemNo: '1', description: 'Bond Paper A4 80gsm (5 reams/box)', quantity: '10', unitCost: '1,250.00', totalAmount: '12,500.00', isCenteredHeader: false },
        { id: 'rfq-s3-2', itemNo: '2', description: 'Ballpen Black 0.5mm (12 pcs/box)', quantity: '15', unitCost: '180.00', totalAmount: '2,700.00', isCenteredHeader: false },
        { id: 'rfq-s3-3', itemNo: '3', description: 'Folder Legal Cream (100 pcs/pack)', quantity: '4', unitCost: '650.00', totalAmount: '2,600.00', isCenteredHeader: false },
      ],
      brandAndModel: '',
      deliveryPeriod: '',
      warranty: '',
      priceValidity: '',
      paperSize: 'legal',
    },
  ];

  const CERT_SAMPLES = [
    {
      referenceTitle: 'cert. of completion-OM-LED',
      deliverySubject:
        'meals to be serve to the participants of Orientation on Government Procurement & Business Opportunities for Women Entrepreneurs in LGU- Maragondon, Cavite',
      autoTrim: true,
      leftSignatoryName: 'WILMA E. PIEDAD',
      leftSignatoryPosition: 'Property Custodian/Inspection Officer',
      rightSignatoryName: 'RIA KRIS O. TIBAYAN',
      rightSignatoryPosition: 'OIC Peso',
      notedByName: 'HERMINIA M. QUENERI',
      notedByPosition: 'Mun. General Services Officer',
      paperSize: 'letter',
    },
    {
      referenceTitle: 'cert. of completion-PWD',
      deliverySubject:
        'tarpaulin for use in upcoming Give a Gift for Indigent PWD in LGU- Maragondon, Cavite',
      autoTrim: true,
      leftSignatoryName: 'WILMA E. PIEDAD',
      leftSignatoryPosition: 'Property Custodian/Inspection Officer',
      rightSignatoryName: 'HERMINIA M. QUENERI',
      rightSignatoryPosition: 'Mun. General Services Officer',
      notedByName: 'HERMINIA M. QUENERI',
      notedByPosition: 'Mun. General Services Officer',
      paperSize: 'letter',
    },
    {
      referenceTitle: 'cert. of completion-MTO',
      deliverySubject:
        "various supplies for use in Treasurer's Office in LGU Maragondon, Cavite",
      autoTrim: true,
      leftSignatoryName: 'WILMA E. PIEDAD',
      leftSignatoryPosition: 'Property Custodian/Inspection Officer',
      rightSignatoryName: 'RIA KRIS O. TIBAYAN',
      rightSignatoryPosition: 'OIC Peso',
      notedByName: 'HERMINIA M. QUENERI',
      notedByPosition: 'Mun. General Services Officer',
      paperSize: 'letter',
    },
  ];

  const SAMPLES = [
    {
      abstractNumber: 'AC –0433H-10-26',
      openedDate: 'October 26, 2026',
      purpose:
        'FOR: PAYMENT FOR THE PURCHASED OF TARPAULIN FOR USE IN UPCOMING GIVE A GIFT FOR INDIGENT PWD IN LGU- MARAGONDON, CAVITE',
      autoTrim: true,
      bidders: [
        { name: 'RBK PRINTING SERVICES', location: 'Bucal 1, Maragondon, Cavite', amountRaw: '₱ 1,000.00' },
        { name: 'CAVITE PRINT EXPRESS', location: 'Naic, Cavite', amountRaw: '₱ 1,250.00' },
        { name: 'MARAGONDON GRAPHICS & PRINTS', location: 'Poblacion 1A, Maragondon, Cavite', amountRaw: '₱ 1,500.00' },
      ],
      winningBidderMode: 'auto',
      currencyDocSymbol: 'P',
    },
    {
      abstractNumber: 'AC –0379-10-26',
      openedDate: 'October 05, 2026',
      purpose:
        "FOR: PAYMENT FOR THE PURCHASED OF VARIOUS SUPPLIES FOR USE IN TREASURER'S OFFICE IN LGU MARAGONDON, CAVITE.",
      autoTrim: true,
      bidders: [
        { name: 'YSA & RAIN MERCHANDISE', location: 'Maragondon, Cavite', amountRaw: '₱ 165,540.00' },
        { name: 'R.M.P. DRY GOODS STORE', location: 'Maragondon, Cavite', amountRaw: '₱ 172,680.00' },
        { name: 'ORTEGA GENERAL MERCHANDISE', location: 'Maragondon, Cavite', amountRaw: '₱ 175,330.00' },
      ],
      winningBidderMode: 'auto',
      currencyDocSymbol: 'P',
    },
    {
      abstractNumber: 'AC –0420S-10-26',
      openedDate: 'October 22, 2026',
      purpose:
        'FOR: PAYMENT FOR THE PURCHASED OF T-SHIRTS FOR THE 18TH DAY CAMPAIGN TO END VAW IN LGU- MARAGONDON, CAVITE.',
      autoTrim: true,
      bidders: [
        { name: 'RBK PRINTING SERVICES', location: 'Bucal 1, Maragondon, Cavite', amountRaw: '₱ 70,200.00' },
        { name: 'RMP DRY GOODS STORE', location: 'Maragondon, Cavite', amountRaw: '₱ 75,600.00' },
        { name: 'BAYSAN STORE', location: 'Maragondon, Cavite', amountRaw: '₱ 75,600.00' },
      ],
      winningBidderMode: 'auto',
      currencyDocSymbol: 'P',
    },
    {
      abstractNumber: 'AC –0382-10-26',
      openedDate: 'October 05, 2026',
      purpose:
        'FOR: PAYMENT FOR THE PURCHASED OF VARIOUS ITEMS FOR USE IN OFFICE OF THE MAYOR IN LGU MARAGONDON, CAVITE.',
      autoTrim: true,
      bidders: [
        { name: "LOLO DAD'S GROCERY", location: 'Maragondon, Cavite', amountRaw: '₱ 19,316.25' },
        { name: 'ALFAMART', location: 'Maragondon, Cavite', amountRaw: '₱ 21,810.00' },
        { name: 'PUREMART', location: 'Maragondon, Cavite', amountRaw: '₱ 24,105.00' },
      ],
      winningBidderMode: 'auto',
      currencyDocSymbol: 'P',
    },
  ];

  // State
  let docMode = 'abstract';
  let formData = structuredClone(SAMPLES[0]);
  formData.signatories = { ...DEFAULT_SIGNATORIES };
  let certData = structuredClone(CERT_SAMPLES[0]);
  let rfqData = structuredClone(RFQ_SAMPLES[0]);
  let prData = structuredClone(PR_SAMPLES[0]);
  let poData = structuredClone(PO_SAMPLES[0]);

  let history = loadHistory();
  let certHistory = loadCertHistory();
  let rfqHistory = loadRfqHistory();
  let prHistory = loadPrHistory();
  let poHistory = loadPoHistory();
  let selectedHistoryId = history[0] ? history[0].id : '';
  let selectedCertHistoryId = certHistory[0] ? certHistory[0].id : '';
  let selectedRfqHistoryId = rfqHistory[0] ? rfqHistory[0].id : '';
  let selectedPrHistoryId = prHistory[0] ? prHistory[0].id : '';
  let selectedPoHistoryId = poHistory[0] ? poHistory[0].id : '';
  let viewMode = 'single';
  let customLogoDataUrl = localStorage.getItem(LOGO_KEY) || '';

  // DOM Refs
  const el = {
    sidebarHeaderTitle: document.getElementById('sidebarHeaderTitle'),
    historyList: document.getElementById('historyList'),
    loadIntoFormBtn: document.getElementById('loadIntoFormBtn'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    headerLogoImg: document.getElementById('headerLogoImg'),
    heroMainTitle: document.getElementById('heroMainTitle'),
    heroSubTitle: document.getElementById('heroSubTitle'),
    logoUploadInput: document.getElementById('logoUploadInput'),
    uploadLogoBtn: document.getElementById('uploadLogoBtn'),
    resetLogoBtn: document.getElementById('resetLogoBtn'),
    openPreviewBtn: document.getElementById('openPreviewBtn'),
    modeAbstractBtn: document.getElementById('modeAbstractBtn'),
    modeCertificateBtn: document.getElementById('modeCertificateBtn'),
    modeRfqBtn: document.getElementById('modeRfqBtn'),
    modePrBtn: document.getElementById('modePrBtn'),
    modePoBtn: document.getElementById('modePoBtn'),
    loadSampleBtn: document.getElementById('loadSampleBtn'),
    sampleDropdownWrap: document.getElementById('sampleDropdownWrap'),
    sampleMenu: document.getElementById('sampleMenu'),
    clearFormBtn: document.getElementById('clearFormBtn'),
    abstractForm: document.getElementById('abstractForm'),
    abstractNumber: document.getElementById('abstractNumber'),
    openedDate: document.getElementById('openedDate'),
    purposeInput: document.getElementById('purposeInput'),
    autoTrimCheckbox: document.getElementById('autoTrimCheckbox'),
    documentLinePreview: document.getElementById('documentLinePreview'),
    validationBanner: document.getElementById('validationBanner'),
    validationText: document.getElementById('validationText'),
    sortBiddersBtn: document.getElementById('sortBiddersBtn'),
    winningBidderSelect: document.getElementById('winningBidderSelect'),
    awardeeNameText: document.getElementById('awardeeNameText'),
    awardeeLocText: document.getElementById('awardeeLocText'),
    awardeeAmtText: document.getElementById('awardeeAmtText'),
    awardClausePreview: document.getElementById('awardClausePreview'),
    certificateForm: document.getElementById('certificateForm'),
    certSampleDropdownWrap: document.getElementById('certSampleDropdownWrap'),
    certLoadSampleBtn: document.getElementById('certLoadSampleBtn'),
    certSampleMenu: document.getElementById('certSampleMenu'),
    certClearFormBtn: document.getElementById('certClearFormBtn'),
    certRefTitle: document.getElementById('certRefTitle'),
    certPaperSize: document.getElementById('certPaperSize'),
    certDeliverySubject: document.getElementById('certDeliverySubject'),
    certAutoTrimCheckbox: document.getElementById('certAutoTrimCheckbox'),
    certParagraphPreview: document.getElementById('certParagraphPreview'),
    certLeftName: document.getElementById('certLeftName'),
    certLeftPos: document.getElementById('certLeftPos'),
    certRightName: document.getElementById('certRightName'),
    certRightPos: document.getElementById('certRightPos'),
    certNotedHiddenNotice: document.getElementById('certNotedHiddenNotice'),
    certNotedBox: document.getElementById('certNotedBox'),
    certNotedName: document.getElementById('certNotedName'),
    certNotedPos: document.getElementById('certNotedPos'),
    rfqForm: document.getElementById('rfqForm'),
    rfqSampleDropdownWrap: document.getElementById('rfqSampleDropdownWrap'),
    rfqLoadSampleBtn: document.getElementById('rfqLoadSampleBtn'),
    rfqSampleMenu: document.getElementById('rfqSampleMenu'),
    rfqClearFormBtn: document.getElementById('rfqClearFormBtn'),
    rfqSupplierName: document.getElementById('rfqSupplierName'),
    rfqSupplierAddress: document.getElementById('rfqSupplierAddress'),
    rfqRefTitle: document.getElementById('rfqRefTitle'),
    rfqDate: document.getElementById('rfqDate'),
    rfqQuotationNo: document.getElementById('rfqQuotationNo'),
    rfqPaperSize: document.getElementById('rfqPaperSize'),
    rfqSignatoryName: document.getElementById('rfqSignatoryName'),
    rfqSignatoryPosition: document.getElementById('rfqSignatoryPosition'),
    rfqAddRowBtn: document.getElementById('rfqAddRowBtn'),
    rfqAddHeaderBtn: document.getElementById('rfqAddHeaderBtn'),
    rfqItemsTbody: document.getElementById('rfqItemsTbody'),
    rfqRowCountText: document.getElementById('rfqRowCountText'),
    rfqGrandTotalDisplay: document.getElementById('rfqGrandTotalDisplay'),
    prForm: document.getElementById('prForm'),
    prSampleDropdownWrap: document.getElementById('prSampleDropdownWrap'),
    prLoadSampleBtn: document.getElementById('prLoadSampleBtn'),
    prSampleMenu: document.getElementById('prSampleMenu'),
    prClearFormBtn: document.getElementById('prClearFormBtn'),
    prNoInput: document.getElementById('prNoInput'),
    prDateInput: document.getElementById('prDateInput'),
    prPaperSize: document.getElementById('prPaperSize'),
    prDepartment: document.getElementById('prDepartment'),
    prSection: document.getElementById('prSection'),
    prFund: document.getElementById('prFund'),
    prFpp: document.getElementById('prFpp'),
    prSectionDate: document.getElementById('prSectionDate'),
    prRefTitle: document.getElementById('prRefTitle'),
    prAddRowBtn: document.getElementById('prAddRowBtn'),
    prItemsTbody: document.getElementById('prItemsTbody'),
    prRowCountText: document.getElementById('prRowCountText'),
    prGrandTotalDisplay: document.getElementById('prGrandTotalDisplay'),
    prPurposeInput: document.getElementById('prPurposeInput'),
    prCertByName: document.getElementById('prCertByName'),
    prCertByPos: document.getElementById('prCertByPos'),
    prReqLabel: document.getElementById('prReqLabel'),
    prReqName: document.getElementById('prReqName'),
    prReqDesig: document.getElementById('prReqDesig'),
    prCashLabel: document.getElementById('prCashLabel'),
    prCashName: document.getElementById('prCashName'),
    prCashDesig: document.getElementById('prCashDesig'),
    prAppLabel: document.getElementById('prAppLabel'),
    prAppName: document.getElementById('prAppName'),
    prAppDesig: document.getElementById('prAppDesig'),
    poForm: document.getElementById('poForm'),
    poSampleDropdownWrap: document.getElementById('poSampleDropdownWrap'),
    poLoadSampleBtn: document.getElementById('poLoadSampleBtn'),
    poSampleMenu: document.getElementById('poSampleMenu'),
    poClearFormBtn: document.getElementById('poClearFormBtn'),
    poSupplierInput: document.getElementById('poSupplierInput'),
    poAddressInput: document.getElementById('poAddressInput'),
    poPrNosInput: document.getElementById('poPrNosInput'),
    poNoInput: document.getElementById('poNoInput'),
    poDateInput: document.getElementById('poDateInput'),
    poTinInput: document.getElementById('poTinInput'),
    poModeProcInput: document.getElementById('poModeProcInput'),
    poPlaceDeliveryInput: document.getElementById('poPlaceDeliveryInput'),
    poDateDeliveryInput: document.getElementById('poDateDeliveryInput'),
    poDeliveryTermInput: document.getElementById('poDeliveryTermInput'),
    poPaymentTermInput: document.getElementById('poPaymentTermInput'),
    poPaperSize: document.getElementById('poPaperSize'),
    poRefTitle: document.getElementById('poRefTitle'),
    poAddHeaderBtn: document.getElementById('poAddHeaderBtn'),
    poAddRowBtn: document.getElementById('poAddRowBtn'),
    poItemsTbody: document.getElementById('poItemsTbody'),
    poRowCountText: document.getElementById('poRowCountText'),
    poGrandTotalDisplay: document.getElementById('poGrandTotalDisplay'),
    poAutoWordsCheckbox: document.getElementById('poAutoWordsCheckbox'),
    poAmountWordsInput: document.getElementById('poAmountWordsInput'),
    poSyncSupplierBtn: document.getElementById('poSyncSupplierBtn'),
    poConformeName: document.getElementById('poConformeName'),
    poConformeDate: document.getElementById('poConformeDate'),
    poOfficialName: document.getElementById('poOfficialName'),
    poOfficialDesig: document.getElementById('poOfficialDesig'),
    poSangResNo: document.getElementById('poSangResNo'),
    poSangSecName: document.getElementById('poSangSecName'),
    poSangSecLabel: document.getElementById('poSangSecLabel'),
    poSangDate: document.getElementById('poSangDate'),
    previewModal: document.getElementById('previewModal'),
    previewModalTitle: document.getElementById('previewModalTitle'),
    previewModalSub: document.getElementById('previewModalSub'),
    previewStage: document.getElementById('previewStage'),
    currencyFmtGroup: document.getElementById('currencyFmtGroup'),
    certPaperGroup: document.getElementById('certPaperGroup'),
    paperLetterBtn: document.getElementById('paperLetterBtn'),
    paperA4Btn: document.getElementById('paperA4Btn'),
    paperLegalBtn: document.getElementById('paperLegalBtn'),
    fmtPBtn: document.getElementById('fmtPBtn'),
    fmtPesoBtn: document.getElementById('fmtPesoBtn'),
    viewModeGroup: document.getElementById('viewModeGroup'),
    viewSingleBtn: document.getElementById('viewSingleBtn'),
    viewAllBtn: document.getElementById('viewAllBtn'),
    toggleSigBtn: document.getElementById('toggleSigBtn'),
    signatoriesDrawer: document.getElementById('signatoriesDrawer'),
    doneSigBtn: document.getElementById('doneSigBtn'),
    printPdfBtn: document.getElementById('printPdfBtn'),
    downloadAllDocxBtn: document.getElementById('downloadAllDocxBtn'),
    downloadDocxBtn: document.getElementById('downloadDocxBtn'),
    closeModalBtn: document.getElementById('closeModalBtn'),
  };

  function loadCertHistory() {
    try {
      const raw = localStorage.getItem(CERT_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return [
      {
        id: 'initial-cert-sample',
        createdAt: new Date().toISOString(),
        tag: 'Initial',
        data: structuredClone(CERT_SAMPLES[0]),
      },
    ];
  }

  function saveCertHistory() {
    try {
      localStorage.setItem(CERT_HISTORY_KEY, JSON.stringify(certHistory));
    } catch (_) {}
  }

  function loadRfqHistory() {
    try {
      const raw = localStorage.getItem(RFQ_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return [
      {
        id: 'initial-rfq-sample',
        createdAt: new Date().toISOString(),
        tag: 'Initial',
        data: structuredClone(RFQ_SAMPLES[0]),
      },
    ];
  }

  function saveRfqHistory() {
    try {
      localStorage.setItem(RFQ_HISTORY_KEY, JSON.stringify(rfqHistory));
    } catch (_) {}
  }

  function loadPrHistory() {
    try {
      const raw = localStorage.getItem(PR_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return [
      {
        id: 'initial-pr-sample',
        createdAt: new Date().toISOString(),
        tag: 'Initial',
        data: structuredClone(PR_SAMPLES[0]),
      },
    ];
  }

  function savePrHistory() {
    try {
      localStorage.setItem(PR_HISTORY_KEY, JSON.stringify(prHistory));
    } catch (_) {}
  }

  function loadPoHistory() {
    try {
      const raw = localStorage.getItem(PO_HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return [
      {
        id: 'initial-po-sample',
        createdAt: new Date().toISOString(),
        tag: 'Initial',
        data: structuredClone(PO_SAMPLES[0]),
      },
    ];
  }

  function savePoHistory() {
    try {
      localStorage.setItem(PO_HISTORY_KEY, JSON.stringify(poHistory));
    } catch (_) {}
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return [
      {
        id: 'initial-sample',
        createdAt: new Date().toISOString(),
        tag: 'Initial',
        data: { ...structuredClone(SAMPLES[0]), signatories: { ...DEFAULT_SIGNATORIES } },
      },
    ];
  }

  function saveHistory() {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (_) {}
  }

  function parseBidAmount(raw) {
    if (!raw) return null;
    const cleaned = String(raw).replace(/[₱pP,\s]/g, '').trim();
    if (!cleaned) return null;
    const num = Number(cleaned);
    return Number.isFinite(num) && num >= 0 ? num : null;
  }

  function formatCurrency(num, symbol) {
    const sym = symbol || '₱';
    if (num === null || !Number.isFinite(num)) return sym + ' 0.00';
    return (
      sym +
      ' ' +
      num.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function formatPurposeLine(rawPurpose, autoTrim) {
    const prefix = 'FOR: PAYMENT FOR THE PURCHASED OF ';
    const suffix = ' IN LGU MARAGONDON, CAVITE.';
    const trimmed = (rawPurpose || '').trim();
    if (!trimmed) {
      return { prefix, core: '...', suffix, full: prefix + '...' + suffix, wrapped: true };
    }
    if (!autoTrim) {
      return { prefix: '', core: trimmed, suffix: '', full: trimmed, wrapped: false };
    }
    let core = trimmed
      .replace(/^FOR:\s*PAYMENT\s+FOR\s+THE\s+PURCHASED?\s+OF\s+/i, '')
      .replace(/^FOR:\s*/i, '')
      .trim();
    core = core
      .replace(/[\s,.-]*IN\s+LGU\s*[-–]?\s*MARAGONDON\s*,?\s*CAVITE\.?\s*$/i, '')
      .replace(/\.+$/, '')
      .trim();
    if (!core) core = trimmed;
    const upperCore = core.toUpperCase();
    return {
      prefix,
      core: upperCore,
      suffix,
      full: prefix + upperCore + suffix,
      wrapped: true,
    };
  }

  function validateBidders(bidders) {
    const parsed = bidders.map((b) => ({
      name: (b.name || '').trim(),
      location: (b.location || '').trim(),
      amount: parseBidAmount(b.amountRaw),
    }));
    const hasMissing = parsed.some((b) => !b.name || b.amount === null);
    let lowestIdx = 0;
    let lowestVal = Infinity;
    parsed.forEach((b, i) => {
      if (b.amount !== null && b.amount < lowestVal) {
        lowestVal = b.amount;
        lowestIdx = i;
      }
    });
    if (hasMissing) {
      return {
        valid: false,
        hasMissing: true,
        lowestIdx,
        message: 'Please complete all 3 bidder names and valid numeric bid amounts.',
      };
    }
    if (parsed[0].amount <= parsed[1].amount && parsed[1].amount <= parsed[2].amount) {
      return {
        valid: true,
        hasMissing: false,
        lowestIdx: 0,
        message: 'Validated: Bidders are correctly ordered from lowest (winner) to higher.',
      };
    }
    return {
      valid: false,
      hasMissing: false,
      lowestIdx,
      message:
        'Bidder amounts are not ordered lowest-to-highest (Lowest is Bidder ' +
        (lowestIdx + 1) +
        ': ' +
        parsed[lowestIdx].name +
        ').',
    };
  }

  function getWinner(data) {
    const val = validateBidders(data.bidders);
    const idx =
      data.winningBidderMode === 'auto'
        ? val.lowestIdx
        : Math.max(0, Math.min(2, Number(data.winningBidderMode) || 0));
    const bidder = data.bidders[idx];
    return {
      index: idx,
      bidder,
      amountValue: parseBidAmount(bidder.amountRaw),
    };
  }

  function getActiveLogoSrc() {
    return customLogoDataUrl || 'assets/maragondon-logo.png';
  }

  function applyLogoToImages() {
    if (customLogoDataUrl) {
      el.headerLogoImg.src = customLogoDataUrl;
      el.resetLogoBtn.hidden = false;
    } else {
      el.headerLogoImg.onerror = function () {
        el.headerLogoImg.onerror = null;
        el.headerLogoImg.src = 'assets/maragondon-logo.svg';
      };
      el.headerLogoImg.src = 'assets/maragondon-logo.png';
      el.resetLogoBtn.hidden = true;
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function syncInputsFromState() {
    el.abstractNumber.value = formData.abstractNumber;
    el.openedDate.value = formData.openedDate;
    el.purposeInput.value = formData.purpose;
    el.autoTrimCheckbox.checked = Boolean(formData.autoTrim);

    [0, 1, 2].forEach((i) => {
      document.getElementById('bidderName' + i).value = formData.bidders[i].name;
      document.getElementById('bidderLoc' + i).value = formData.bidders[i].location;
      document.getElementById('bidderAmt' + i).value = formData.bidders[i].amountRaw;
    });

    el.winningBidderSelect.value = formData.winningBidderMode || 'auto';

    const sig = formData.signatories || DEFAULT_SIGNATORIES;
    document.getElementById('sigChairName').value = sig.chairmanName;
    document.getElementById('sigChairTitle').value = sig.chairmanTitle;
    document.getElementById('sigViceName').value = sig.viceChairmanName;
    document.getElementById('sigViceTitle').value = sig.viceChairmanTitle;
    document.getElementById('sigMem1Name').value = sig.member1Name;
    document.getElementById('sigMem1Title').value = sig.member1Title;
    document.getElementById('sigMem2Name').value = sig.member2Name;
    document.getElementById('sigMem2Title').value = sig.member2Title;
    document.getElementById('sigMem3Name').value = sig.member3Name;
    document.getElementById('sigMem3Title').value = sig.member3Title;

    renderDerivedUI();
  }

  function renderDerivedUI() {
    // Document Line Preview
    const lp = formatPurposeLine(formData.purpose, formData.autoTrim);
    if (lp.wrapped) {
      el.documentLinePreview.innerHTML =
        'Document Line Preview: ' +
        escapeHtml(lp.prefix) +
        '<strong>' +
        escapeHtml(lp.core) +
        '</strong>' +
        escapeHtml(lp.suffix);
    } else {
      el.documentLinePreview.innerHTML =
        'Document Line Preview: <span style="color:#e2e8f0">' +
        escapeHtml(lp.full) +
        '</span>';
    }

    // Bidder echoes
    [0, 1, 2].forEach((i) => {
      const parsed = parseBidAmount(formData.bidders[i].amountRaw);
      document.getElementById('bidderEcho' + i).textContent = formatCurrency(
        parsed,
        '₱'
      );
    });

    // Validation banner
    const val = validateBidders(formData.bidders);
    el.validationText.textContent = val.message;
    el.validationBanner.className = 'validation-banner ' + (val.valid ? 'valid' : 'warning');
    el.sortBiddersBtn.hidden = val.valid || val.hasMissing;

    // Winning Bidder Select options labels
    const opts = el.winningBidderSelect.options;
    const lowestBidder = formData.bidders[val.lowestIdx];
    const lowestAmt = formatCurrency(parseBidAmount(lowestBidder.amountRaw), '₱');
    opts[0].textContent =
      'Auto: Lowest Bidder [Bidder ' +
      (val.lowestIdx + 1) +
      ' (' +
      (lowestBidder.name || '—') +
      ' - ' +
      lowestAmt +
      ')]';
    [0, 1, 2].forEach((i) => {
      const b = formData.bidders[i];
      opts[i + 1].textContent =
        'Manual: Bidder ' +
        (i + 1) +
        ' (' +
        (b.name || '—') +
        ' - ' +
        formatCurrency(parseBidAmount(b.amountRaw), '₱') +
        ')';
    });

    // Awardee Summary & Clause
    const winner = getWinner(formData);
    const wName = (winner.bidder.name || '').trim().toUpperCase() || 'WINNING BIDDER';
    const wLoc = (winner.bidder.location || '').trim() || 'Maragondon, Cavite';
    const wAmt = formatCurrency(winner.amountValue, '₱');

    el.awardeeNameText.textContent = wName;
    el.awardeeLocText.textContent = wLoc;
    el.awardeeAmtText.textContent = wAmt;
    el.awardClausePreview.textContent =
      'Awarded to the lowest bidder ' +
      wName +
      ', ' +
      wLoc +
      ' same being reasonable and most advantageous to the government.';
  }

  function formatCertificateBody(rawSubject, autoTrim) {
    const prefix = 'This is to certify that the delivery of ';
    const suffix = ' is 100% completed as to quantity and accepted.';
    const trimmed = (rawSubject || '').trim();
    if (!trimmed) {
      return { prefix, core: '...', suffix, full: prefix + '...' + suffix };
    }
    let core = trimmed;
    if (autoTrim) {
      core = core
        .replace(/^this\s+is\s+to\s+certify\s+that\s+the\s+delivery\s+of\s+/i, '')
        .replace(/\s+is\s+100%\s+completed\s+as\s+to\s+quantity\s+and\s+accepted\.?\s*$/i, '')
        .replace(/\.+$/, '')
        .trim();
      if (!core) core = trimmed;
    }
    return { prefix, core, suffix, full: prefix + core + suffix };
  }

  function shouldHideCertificateNotedBy(rightName, rightPos, notedName) {
    const normName = String(rightName || '').trim().replace(/\s+/g, ' ').toLowerCase();
    const normPos = String(rightPos || '').trim().replace(/\s+/g, ' ').toLowerCase();
    const normNoted = String(notedName || 'HERMINIA M. QUENERI').trim().replace(/\s+/g, ' ').toLowerCase();
    if (normName && normNoted && normName === normNoted) return true;
    if (normName.includes('herminia') || normName.includes('queneri')) return true;
    if (
      normPos.includes('general services officer') ||
      normPos === 'mun. general services officer' ||
      normPos === 'municipal general services officer'
    ) {
      return true;
    }
    return false;
  }

  function syncCertInputsFromState() {
    el.certRefTitle.value = certData.referenceTitle || '';
    el.certPaperSize.value = certData.paperSize || 'letter';
    el.certDeliverySubject.value = certData.deliverySubject || '';
    el.certAutoTrimCheckbox.checked = Boolean(certData.autoTrim);
    el.certLeftName.value = certData.leftSignatoryName || '';
    el.certLeftPos.value = certData.leftSignatoryPosition || '';
    el.certRightName.value = certData.rightSignatoryName || '';
    el.certRightPos.value = certData.rightSignatoryPosition || '';
    el.certNotedName.value = certData.notedByName || '';
    el.certNotedPos.value = certData.notedByPosition || '';
    renderCertDerivedUI();
  }

  function renderCertDerivedUI() {
    const body = formatCertificateBody(certData.deliverySubject, certData.autoTrim);
    el.certParagraphPreview.innerHTML =
      '<span class="preview-heading">Document Paragraph Preview:</span>' +
      escapeHtml(body.prefix) +
      '<strong>' +
      escapeHtml(body.core) +
      '</strong>' +
      escapeHtml(body.suffix);

    const hideNoted = shouldHideCertificateNotedBy(
      certData.rightSignatoryName,
      certData.rightSignatoryPosition,
      certData.notedByName
    );
    el.certNotedHiddenNotice.hidden = !hideNoted;
    el.certNotedBox.hidden = hideNoted;

    document.querySelectorAll('.preset-btn').forEach((btn) => {
      const pName = (btn.getAttribute('data-preset-name') || '').toLowerCase();
      const pPos = (btn.getAttribute('data-preset-pos') || '').toLowerCase();
      const active =
        (certData.rightSignatoryName || '').trim().toLowerCase() === pName &&
        (certData.rightSignatoryPosition || '').trim().toLowerCase() === pPos;
      btn.classList.toggle('active', active);
    });
  }

  function formatPlainDecimal(value) {
    if (value === null || !Number.isFinite(value)) return '';
    return value.toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function calculateRfqTotal(items) {
    return (items || []).reduce((sum, item) => {
      const v = parseBidAmount(item.totalAmount);
      return sum + (v !== null ? v : 0);
    }, 0);
  }

  function updateRfqGrandTotalDisplay() {
    const total = calculateRfqTotal(rfqData.items);
    el.rfqGrandTotalDisplay.textContent = formatPlainDecimal(total) || '0.00';
    el.rfqRowCountText.textContent = String((rfqData.items || []).length);
  }

  function renderRfqPresetHighlights() {
    document.querySelectorAll('.rfq-preset-btn').forEach((btn) => {
      const pName = (btn.getAttribute('data-rfq-name') || '').toLowerCase();
      const pPos = (btn.getAttribute('data-rfq-pos') || '').toLowerCase();
      const active =
        (rfqData.signatoryName || '').trim().toLowerCase() === pName &&
        (rfqData.signatoryPosition || '').trim().toLowerCase() === pPos;
      btn.classList.toggle('active', active);
    });
  }

  function renderRfqItemsTable() {
    el.rfqItemsTbody.innerHTML = rfqData.items
      .map((row, idx) => {
        const groupClass = row.isCenteredHeader ? ' is-group' : '';
        const centerActive = row.isCenteredHeader ? ' active' : '';
        return (
          '<tr class="' +
          groupClass.trim() +
          '" data-row-idx="' +
          idx +
          '">' +
          '<td><input type="text" class="rfq-cell-input rfq-in-no" style="text-align:center;" value="' +
          escapeHtml(row.itemNo || '') +
          '" placeholder="#" /></td>' +
          '<td><input type="text" class="rfq-cell-input rfq-in-desc" style="' +
          (row.isCenteredHeader ? 'text-align:center;font-weight:600;color:#bae6fd;' : '') +
          '" value="' +
          escapeHtml(row.description || '') +
          '" placeholder="' +
          (row.isCenteredHeader ? 'Date / Group Title (e.g. 13- Aug,25)' : 'Item description...') +
          '" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono rfq-in-qty" style="text-align:center;" value="' +
          escapeHtml(row.quantity || '') +
          '" placeholder="Qty" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono rfq-in-cost" style="text-align:right;" value="' +
          escapeHtml(row.unitCost || '') +
          '" placeholder="0.00" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono is-total-cell rfq-in-total" style="text-align:right;" value="' +
          escapeHtml(row.totalAmount || '') +
          '" placeholder="0.00" /></td>' +
          '<td><div class="rfq-row-actions">' +
          '<button type="button" class="rfq-row-btn rfq-center-btn' +
          centerActive +
          '" title="Center align description">C</button>' +
          '<button type="button" class="rfq-row-btn danger rfq-del-btn" title="Remove row">&times;</button>' +
          '</div></td>' +
          '</tr>'
        );
      })
      .join('');

    el.rfqItemsTbody.querySelectorAll('tr').forEach((tr) => {
      const idx = Number(tr.getAttribute('data-row-idx'));
      const row = rfqData.items[idx];
      if (!row) return;

      const noInput = tr.querySelector('.rfq-in-no');
      const descInput = tr.querySelector('.rfq-in-desc');
      const qtyInput = tr.querySelector('.rfq-in-qty');
      const costInput = tr.querySelector('.rfq-in-cost');
      const totalInput = tr.querySelector('.rfq-in-total');
      const centerBtn = tr.querySelector('.rfq-center-btn');
      const delBtn = tr.querySelector('.rfq-del-btn');

      noInput.addEventListener('input', (e) => {
        row.itemNo = e.target.value;
      });
      descInput.addEventListener('input', (e) => {
        row.description = e.target.value;
      });

      const maybeAutoCalc = (prevQtyStr, prevCostStr) => {
        const prevQty = parseBidAmount(prevQtyStr);
        const prevCost = parseBidAmount(prevCostStr);
        const prevTot = parseBidAmount(row.totalAmount);
        const wasAutoOrEmpty =
          !String(row.totalAmount || '').trim() ||
          (prevQty !== null &&
            prevCost !== null &&
            prevTot !== null &&
            Math.abs(prevQty * prevCost - prevTot) < 0.01);
        const nextQty = parseBidAmount(row.quantity);
        const nextCost = parseBidAmount(row.unitCost);
        if (wasAutoOrEmpty && nextQty !== null && nextCost !== null) {
          row.totalAmount = formatPlainDecimal(nextQty * nextCost);
          totalInput.value = row.totalAmount;
        }
        updateRfqGrandTotalDisplay();
      };

      qtyInput.addEventListener('input', (e) => {
        const oldQty = row.quantity;
        row.quantity = e.target.value;
        maybeAutoCalc(oldQty, row.unitCost);
      });

      costInput.addEventListener('input', (e) => {
        const oldCost = row.unitCost;
        row.unitCost = e.target.value;
        maybeAutoCalc(row.quantity, oldCost);
      });

      costInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.unitCost);
        if (v !== null) {
          row.unitCost = formatPlainDecimal(v);
          costInput.value = row.unitCost;
        }
      });

      totalInput.addEventListener('input', (e) => {
        row.totalAmount = e.target.value;
        updateRfqGrandTotalDisplay();
      });

      totalInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.totalAmount);
        if (v !== null) {
          row.totalAmount = formatPlainDecimal(v);
          totalInput.value = row.totalAmount;
          updateRfqGrandTotalDisplay();
        }
      });

      centerBtn.addEventListener('click', () => {
        row.isCenteredHeader = !row.isCenteredHeader;
        renderRfqItemsTable();
      });

      delBtn.addEventListener('click', () => {
        if (rfqData.items.length <= 1) {
          rfqData.items = [
            {
              id: 'rfq-' + Date.now(),
              itemNo: '',
              description: '',
              quantity: '',
              unitCost: '',
              totalAmount: '',
              isCenteredHeader: false,
            },
          ];
        } else {
          rfqData.items.splice(idx, 1);
        }
        renderRfqItemsTable();
      });
    });

    updateRfqGrandTotalDisplay();
  }

  function syncRfqInputsFromState() {
    el.rfqSupplierName.value = rfqData.supplierName || '';
    el.rfqSupplierAddress.value = rfqData.supplierAddress || '';
    el.rfqRefTitle.value = rfqData.referenceTitle || '';
    el.rfqDate.value = rfqData.date || '';
    el.rfqQuotationNo.value = rfqData.quotationNo || '';
    el.rfqPaperSize.value = rfqData.paperSize || 'legal';
    el.rfqSignatoryName.value = rfqData.signatoryName || '';
    el.rfqSignatoryPosition.value = rfqData.signatoryPosition || '';
    renderRfqPresetHighlights();
    renderRfqItemsTable();
  }

  function calculatePrTotal(items) {
    return (items || []).reduce((sum, item) => {
      const v = parseBidAmount(item.totalCost);
      return sum + (v !== null ? v : 0);
    }, 0);
  }

  function updatePrGrandTotalDisplay() {
    const total = calculatePrTotal(prData.items);
    el.prGrandTotalDisplay.textContent = formatPlainDecimal(total) || '0.00';
    el.prRowCountText.textContent = String((prData.items || []).length);
  }

  function renderPrCertPresetHighlights() {
    document.querySelectorAll('.pr-cert-preset-btn').forEach((btn) => {
      const pName = (btn.getAttribute('data-pr-cert-name') || '').toLowerCase();
      const active = (prData.certifiedByName || '').trim().toLowerCase() === pName;
      btn.classList.toggle('active', active);
    });
  }

  function renderPrItemsTable() {
    el.prItemsTbody.innerHTML = prData.items
      .map((row, idx) => {
        return (
          '<tr data-row-idx="' +
          idx +
          '">' +
          '<td><input type="text" class="rfq-cell-input pr-in-no" style="text-align:center;" value="' +
          escapeHtml(row.itemNo || '') +
          '" placeholder="#" /></td>' +
          '<td><input type="text" class="rfq-cell-input pr-in-unit" style="text-align:center;" value="' +
          escapeHtml(row.unit || '') +
          '" placeholder="pc/pcs" /></td>' +
          '<td><input type="text" class="rfq-cell-input pr-in-desc" value="' +
          escapeHtml(row.description || '') +
          '" placeholder="Item description..." /></td>' +
          '<td><input type="text" class="rfq-cell-input mono pr-in-qty" style="text-align:center;" value="' +
          escapeHtml(row.quantity || '') +
          '" placeholder="Qty" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono pr-in-cost" style="text-align:right;" value="' +
          escapeHtml(row.unitCost || '') +
          '" placeholder="0.00" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono is-total-cell pr-in-total" style="text-align:right;" value="' +
          escapeHtml(row.totalCost || '') +
          '" placeholder="0.00" /></td>' +
          '<td style="text-align:center;"><button type="button" class="rfq-row-btn danger pr-del-btn" title="Remove row">&times;</button></td>' +
          '</tr>'
        );
      })
      .join('');

    el.prItemsTbody.querySelectorAll('tr').forEach((tr) => {
      const idx = Number(tr.getAttribute('data-row-idx'));
      const row = prData.items[idx];
      if (!row) return;

      const noInput = tr.querySelector('.pr-in-no');
      const unitInput = tr.querySelector('.pr-in-unit');
      const descInput = tr.querySelector('.pr-in-desc');
      const qtyInput = tr.querySelector('.pr-in-qty');
      const costInput = tr.querySelector('.pr-in-cost');
      const totalInput = tr.querySelector('.pr-in-total');
      const delBtn = tr.querySelector('.pr-del-btn');

      noInput.addEventListener('input', (e) => {
        row.itemNo = e.target.value;
      });
      unitInput.addEventListener('input', (e) => {
        row.unit = e.target.value;
      });
      descInput.addEventListener('input', (e) => {
        row.description = e.target.value;
      });

      const maybeAutoCalc = (prevQtyStr, prevCostStr) => {
        const prevQty = parseBidAmount(prevQtyStr);
        const prevCost = parseBidAmount(prevCostStr);
        const prevTot = parseBidAmount(row.totalCost);
        const wasAutoOrEmpty =
          !String(row.totalCost || '').trim() ||
          (prevQty !== null &&
            prevCost !== null &&
            prevTot !== null &&
            Math.abs(prevQty * prevCost - prevTot) < 0.01);
        const nextQty = parseBidAmount(row.quantity);
        const nextCost = parseBidAmount(row.unitCost);
        if (wasAutoOrEmpty && nextQty !== null && nextCost !== null) {
          row.totalCost = formatPlainDecimal(nextQty * nextCost);
          totalInput.value = row.totalCost;
        }
        updatePrGrandTotalDisplay();
      };

      qtyInput.addEventListener('input', (e) => {
        const oldQty = row.quantity;
        row.quantity = e.target.value;
        maybeAutoCalc(oldQty, row.unitCost);
      });
      costInput.addEventListener('input', (e) => {
        const oldCost = row.unitCost;
        row.unitCost = e.target.value;
        maybeAutoCalc(row.quantity, oldCost);
      });
      costInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.unitCost);
        if (v !== null) {
          row.unitCost = formatPlainDecimal(v);
          costInput.value = row.unitCost;
        }
      });
      totalInput.addEventListener('input', (e) => {
        row.totalCost = e.target.value;
        updatePrGrandTotalDisplay();
      });
      totalInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.totalCost);
        if (v !== null) {
          row.totalCost = formatPlainDecimal(v);
          totalInput.value = row.totalCost;
          updatePrGrandTotalDisplay();
        }
      });
      delBtn.addEventListener('click', () => {
        if (prData.items.length <= 1) {
          prData.items = [
            {
              id: 'pr-' + Date.now(),
              itemNo: '',
              unit: '',
              description: '',
              quantity: '',
              unitCost: '',
              totalCost: '',
            },
          ];
        } else {
          prData.items.splice(idx, 1);
        }
        renderPrItemsTable();
      });
    });

    updatePrGrandTotalDisplay();
  }

  function syncPrInputsFromState() {
    el.prNoInput.value = prData.prNo || '';
    el.prDateInput.value = prData.prDate || '';
    el.prPaperSize.value = prData.paperSize || 'legal';
    el.prDepartment.value = prData.department || '';
    el.prSection.value = prData.section || '';
    el.prFund.value = prData.fund || '';
    el.prFpp.value = prData.fpp || '';
    el.prSectionDate.value = prData.sectionDate || '';
    el.prRefTitle.value = prData.referenceTitle || '';
    el.prPurposeInput.value = prData.purpose || '';
    el.prCertByName.value = prData.certifiedByName || '';
    el.prCertByPos.value = prData.certifiedByPosition || '';
    el.prReqLabel.value = prData.requestedByLabel || 'Requested by:';
    el.prReqName.value = prData.requestedByName || '';
    el.prReqDesig.value = prData.requestedByDesignation || '';
    el.prCashLabel.value = prData.cashAvailLabel || 'Cash Availability:';
    el.prCashName.value = prData.cashAvailName || '';
    el.prCashDesig.value = prData.cashAvailDesignation || '';
    el.prAppLabel.value = prData.approvedByLabel || 'Approved by:';
    el.prAppName.value = prData.approvedByName || '';
    el.prAppDesig.value = prData.approvedByDesignation || '';
    renderPrCertPresetHighlights();
    renderPrItemsTable();
  }

  function calculatePoTotal(items) {
    return (items || []).reduce((sum, item) => {
      const v = parseBidAmount(item.amount);
      return sum + (v !== null ? v : 0);
    }, 0);
  }

  const ONES_WORDS = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen',
  ];
  const TENS_WORDS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function integerBelowThousandToWords(n) {
    const parts = [];
    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    if (hundreds > 0) parts.push(ONES_WORDS[hundreds] + ' hundred');
    if (remainder > 0) {
      if (remainder < 20) {
        parts.push(ONES_WORDS[remainder]);
      } else {
        const tens = Math.floor(remainder / 10);
        const ones = remainder % 10;
        parts.push(ones > 0 ? TENS_WORDS[tens] + '-' + ONES_WORDS[ones] : TENS_WORDS[tens]);
      }
    }
    return parts.join(' ');
  }

  function integerToEnglishWords(n) {
    if (n <= 0) return 'zero';
    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];
    const groups = [];
    let remaining = Math.floor(n);
    let scaleIdx = 0;
    while (remaining > 0 && scaleIdx < scales.length) {
      const chunk = remaining % 1000;
      if (chunk > 0) {
        const chunkWords = integerBelowThousandToWords(chunk);
        groups.unshift(scales[scaleIdx] ? chunkWords + ' ' + scales[scaleIdx] : chunkWords);
      }
      remaining = Math.floor(remaining / 1000);
      scaleIdx++;
    }
    return groups.join(' ');
  }

  function numberToPesosWords(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return 'Zero pesos.';
    const roundedCents = Math.round(amount * 100);
    const pesos = Math.floor(roundedCents / 100);
    const centavos = roundedCents % 100;
    const pesoWords = integerToEnglishWords(pesos);
    const pesoUnit = pesos === 1 ? 'peso' : 'pesos';
    const capitalized = pesoWords.charAt(0).toUpperCase() + pesoWords.slice(1);
    if (centavos > 0) {
      return capitalized + ' ' + pesoUnit + ' and ' + String(centavos).padStart(2, '0') + '/100.';
    }
    return capitalized + ' ' + pesoUnit + '.';
  }

  function updatePoSummaryAndWords() {
    const total = calculatePoTotal(poData.items);
    el.poGrandTotalDisplay.textContent = formatPlainDecimal(total) || '0.00';
    el.poRowCountText.textContent = String((poData.items || []).length);
    const resolvedWords = poData.autoAmountInWords
      ? numberToPesosWords(total)
      : (poData.amountInWords || '').trim() || numberToPesosWords(total);
    if (poData.autoAmountInWords) {
      poData.amountInWords = resolvedWords;
    }
    el.poAutoWordsCheckbox.checked = Boolean(poData.autoAmountInWords);
    el.poAmountWordsInput.readOnly = Boolean(poData.autoAmountInWords);
    el.poAmountWordsInput.classList.toggle('is-manual', !poData.autoAmountInWords);
    el.poAmountWordsInput.value = resolvedWords;
  }

  function renderPoOfficialPresetHighlights() {
    document.querySelectorAll('.po-official-preset-btn').forEach((btn) => {
      const pName = (btn.getAttribute('data-po-name') || '').toLowerCase();
      const active = (poData.authorizedOfficialName || '').trim().toLowerCase() === pName;
      btn.classList.toggle('active', active);
    });
  }

  function renderPoItemsTable() {
    el.poItemsTbody.innerHTML = poData.items
      .map((row, idx) => {
        const groupClass = row.isCenteredHeader ? ' is-group' : '';
        const centerActive = row.isCenteredHeader ? ' active' : '';
        const disabledAttr = row.isCenteredHeader ? ' disabled' : '';
        return (
          '<tr class="' + groupClass.trim() + '" data-row-idx="' + idx + '">' +
          '<td><input type="text" class="rfq-cell-input po-in-stock" style="text-align:center;" value="' + escapeHtml(row.stockNo || '') + '" placeholder="#" /></td>' +
          '<td><input type="text" class="rfq-cell-input po-in-unit" style="text-align:center;" value="' + escapeHtml(row.unit || '') + '" placeholder="unit" /></td>' +
          '<td><input type="text" class="rfq-cell-input po-in-desc" style="' + (row.isCenteredHeader ? 'text-align:center;font-weight:600;color:#bae6fd;' : '') + '" value="' + escapeHtml(row.description || '') + '" placeholder="' + (row.isCenteredHeader ? 'Date / section header (e.g. 13- Aug,25)' : 'Item description...') + '" /></td>' +
          '<td><input type="text" class="rfq-cell-input mono po-in-qty" style="text-align:center;" value="' + escapeHtml(row.quantity || '') + '" placeholder="Qty"' + disabledAttr + ' /></td>' +
          '<td><input type="text" class="rfq-cell-input mono po-in-cost" style="text-align:right;" value="' + escapeHtml(row.unitCost || '') + '" placeholder="0.00"' + disabledAttr + ' /></td>' +
          '<td><input type="text" class="rfq-cell-input mono is-total-cell po-in-amt" style="text-align:right;" value="' + escapeHtml(row.amount || '') + '" placeholder="0.00"' + disabledAttr + ' /></td>' +
          '<td><div class="rfq-row-actions">' +
          '<button type="button" class="rfq-row-btn po-center-btn' + centerActive + '" title="Toggle date / header row">C</button>' +
          '<button type="button" class="rfq-row-btn danger po-del-btn" title="Remove row">&times;</button>' +
          '</div></td>' +
          '</tr>'
        );
      })
      .join('');

    el.poItemsTbody.querySelectorAll('tr').forEach((tr) => {
      const idx = Number(tr.getAttribute('data-row-idx'));
      const row = poData.items[idx];
      if (!row) return;

      const stockInput = tr.querySelector('.po-in-stock');
      const unitInput = tr.querySelector('.po-in-unit');
      const descInput = tr.querySelector('.po-in-desc');
      const qtyInput = tr.querySelector('.po-in-qty');
      const costInput = tr.querySelector('.po-in-cost');
      const amtInput = tr.querySelector('.po-in-amt');
      const centerBtn = tr.querySelector('.po-center-btn');
      const delBtn = tr.querySelector('.po-del-btn');

      stockInput.addEventListener('input', (e) => { row.stockNo = e.target.value; });
      unitInput.addEventListener('input', (e) => { row.unit = e.target.value; });
      descInput.addEventListener('input', (e) => { row.description = e.target.value; });

      const maybeAutoCalc = (prevQtyStr, prevCostStr) => {
        const prevQty = parseBidAmount(prevQtyStr);
        const prevCost = parseBidAmount(prevCostStr);
        const prevAmt = parseBidAmount(row.amount);
        const wasAutoOrEmpty =
          !String(row.amount || '').trim() ||
          (prevQty !== null && prevCost !== null && prevAmt !== null && Math.abs(prevQty * prevCost - prevAmt) < 0.01);
        const nextQty = parseBidAmount(row.quantity);
        const nextCost = parseBidAmount(row.unitCost);
        if (wasAutoOrEmpty && nextQty !== null && nextCost !== null) {
          row.amount = formatPlainDecimal(nextQty * nextCost);
          amtInput.value = row.amount;
        }
        updatePoSummaryAndWords();
      };

      qtyInput.addEventListener('input', (e) => {
        const oldQty = row.quantity;
        row.quantity = e.target.value;
        maybeAutoCalc(oldQty, row.unitCost);
      });
      costInput.addEventListener('input', (e) => {
        const oldCost = row.unitCost;
        row.unitCost = e.target.value;
        maybeAutoCalc(row.quantity, oldCost);
      });
      costInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.unitCost);
        if (v !== null) {
          row.unitCost = formatPlainDecimal(v);
          costInput.value = row.unitCost;
        }
      });
      amtInput.addEventListener('input', (e) => {
        row.amount = e.target.value;
        updatePoSummaryAndWords();
      });
      amtInput.addEventListener('blur', () => {
        const v = parseBidAmount(row.amount);
        if (v !== null) {
          row.amount = formatPlainDecimal(v);
          amtInput.value = row.amount;
          updatePoSummaryAndWords();
        }
      });
      centerBtn.addEventListener('click', () => {
        row.isCenteredHeader = !row.isCenteredHeader;
        if (row.isCenteredHeader) {
          row.quantity = '';
          row.unitCost = '';
          row.amount = '';
        }
        renderPoItemsTable();
      });
      delBtn.addEventListener('click', () => {
        if (poData.items.length <= 1) {
          poData.items = [{
            id: 'po-' + Date.now(),
            stockNo: '',
            unit: '',
            description: '',
            quantity: '',
            unitCost: '',
            amount: '',
            isCenteredHeader: false,
          }];
        } else {
          poData.items.splice(idx, 1);
        }
        renderPoItemsTable();
      });
    });

    updatePoSummaryAndWords();
  }

  function syncPoInputsFromState() {
    el.poSupplierInput.value = poData.supplier || '';
    el.poAddressInput.value = poData.address || '';
    el.poPrNosInput.value = poData.prNos || '';
    el.poNoInput.value = poData.poNo || '';
    el.poDateInput.value = poData.poDate || '';
    el.poTinInput.value = poData.tin || '';
    el.poModeProcInput.value = poData.modeOfProcurement || '';
    el.poPlaceDeliveryInput.value = poData.placeOfDelivery || '';
    el.poDateDeliveryInput.value = poData.dateOfDelivery || '';
    el.poDeliveryTermInput.value = poData.deliveryTerm || '';
    el.poPaymentTermInput.value = poData.paymentTerm || '';
    el.poPaperSize.value = poData.paperSize || 'a4';
    el.poRefTitle.value = poData.referenceTitle || '';
    el.poConformeName.value = poData.conformeSupplierName || '';
    el.poConformeDate.value = poData.conformeDate || '';
    el.poOfficialName.value = poData.authorizedOfficialName || '';
    el.poOfficialDesig.value = poData.authorizedOfficialDesignation || '';
    el.poSangResNo.value = poData.sanggunianResNo || '';
    el.poSangSecName.value = poData.sanggunianSecretaryName || '';
    el.poSangSecLabel.value = poData.sanggunianSecretaryLabel || 'Secretary to the Sanggunian';
    el.poSangDate.value = poData.sanggunianDate || '';
    renderPoOfficialPresetHighlights();
    renderPoItemsTable();
  }

  function switchDocMode(nextMode) {
    docMode = nextMode;
    el.modeAbstractBtn.classList.toggle('active', docMode === 'abstract');
    el.modeCertificateBtn.classList.toggle('active', docMode === 'certificate');
    el.modeRfqBtn.classList.toggle('active', docMode === 'rfq');
    el.modePrBtn.classList.toggle('active', docMode === 'pr');
    el.modePoBtn.classList.toggle('active', docMode === 'po');
    el.abstractForm.hidden = docMode !== 'abstract';
    el.certificateForm.hidden = docMode !== 'certificate';
    el.rfqForm.hidden = docMode !== 'rfq';
    el.prForm.hidden = docMode !== 'pr';
    el.poForm.hidden = docMode !== 'po';
    el.sidebarHeaderTitle.textContent =
      docMode === 'abstract'
        ? 'ABSTRACT HISTORY'
        : docMode === 'certificate'
        ? 'CERTIFICATE HISTORY'
        : docMode === 'rfq'
        ? 'RFQ HISTORY'
        : docMode === 'pr'
        ? 'PR HISTORY'
        : 'PO HISTORY';
    el.heroMainTitle.textContent =
      docMode === 'abstract'
        ? 'Abstract of Canvass Generator'
        : docMode === 'certificate'
        ? 'Certificate of Delivery & Acceptance'
        : docMode === 'rfq'
        ? 'Request For Quotation (SF-GOOD-80)'
        : docMode === 'pr'
        ? 'Purchase Request (Appendix 47)'
        : 'Purchase Order (Appendix 49)';
    el.heroSubTitle.textContent =
      docMode === 'abstract'
        ? 'Republic of the Philippines • Province of Cavite • Municipality of Maragondon • Committee on Awards'
        : docMode === 'certificate'
        ? 'Republic of the Philippines • Province of Cavite • Municipality of Maragondon • Inspection & Acceptance'
        : docMode === 'rfq'
        ? 'Republic of the Philippines • Province of Cavite • Municipality of Maragondon • Bids & Quotation'
        : docMode === 'pr'
        ? 'Republic of the Philippines • Province of Cavite • Municipality of Maragondon • Requisition & APP'
        : 'Republic of the Philippines • Province of Cavite • Municipality of Maragondon • LGU Procurement Order';
    viewMode = 'single';
    renderHistory();
  }

  function renderHistory() {
    if (docMode === 'po') {
      if (poHistory.length === 0) {
        el.historyList.innerHTML =
          '<div class="history-empty">No saved Purchase Orders yet. Click Generate Purchase Order to record an entry.</div>';
        el.loadIntoFormBtn.disabled = true;
        el.clearHistoryBtn.disabled = true;
        return;
      }

      el.loadIntoFormBtn.disabled = !selectedPoHistoryId;
      el.clearHistoryBtn.disabled = false;

      el.historyList.innerHTML = poHistory
        .map((item) => {
          const activeClass = item.id === selectedPoHistoryId ? ' active' : '';
          const tot = formatPlainDecimal(calculatePoTotal(item.data.items)) || '0.00';
          return (
            '<button type="button" class="history-card' +
            activeClass +
            '" data-history-id="' +
            escapeHtml(item.id) +
            '">' +
            '<div class="history-card-code mono">' +
            escapeHtml(item.data.supplier || 'SUPPLIER') +
            '</div>' +
            '<div class="history-card-winner">' +
            escapeHtml(item.data.prNos ? 'PR: ' + item.data.prNos : item.data.referenceTitle || 'Appendix 49') +
            '</div>' +
            '<div class="history-card-footer">' +
            '<span class="mono">₱ ' +
            escapeHtml(tot) +
            '</span>' +
            '<span class="history-card-tag">' +
            escapeHtml(item.tag || 'Saved') +
            '</span>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      el.historyList.querySelectorAll('.history-card').forEach((btn) => {
        btn.addEventListener('click', () => {
          loadPoHistoryItem(btn.getAttribute('data-history-id'));
        });
      });
      return;
    }

    if (docMode === 'pr') {
      if (prHistory.length === 0) {
        el.historyList.innerHTML =
          '<div class="history-empty">No saved Purchase Requests yet. Click Generate Purchase Request to record an entry.</div>';
        el.loadIntoFormBtn.disabled = true;
        el.clearHistoryBtn.disabled = true;
        return;
      }

      el.loadIntoFormBtn.disabled = !selectedPrHistoryId;
      el.clearHistoryBtn.disabled = false;

      el.historyList.innerHTML = prHistory
        .map((item) => {
          const activeClass = item.id === selectedPrHistoryId ? ' active' : '';
          const tot = formatPlainDecimal(calculatePrTotal(item.data.items)) || '0.00';
          return (
            '<button type="button" class="history-card' +
            activeClass +
            '" data-history-id="' +
            escapeHtml(item.id) +
            '">' +
            '<div class="history-card-code mono">PR No. ' +
            escapeHtml(item.data.prNo || '—') +
            '</div>' +
            '<div class="history-card-winner">' +
            escapeHtml(item.data.prDate ? 'Date: ' + item.data.prDate : item.data.referenceTitle || 'Appendix 47') +
            '</div>' +
            '<div class="history-card-footer">' +
            '<span class="mono">₱ ' +
            escapeHtml(tot) +
            '</span>' +
            '<span class="history-card-tag">' +
            escapeHtml(item.tag || 'Saved') +
            '</span>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      el.historyList.querySelectorAll('.history-card').forEach((btn) => {
        btn.addEventListener('click', () => {
          loadPrHistoryItem(btn.getAttribute('data-history-id'));
        });
      });
      return;
    }

    if (docMode === 'rfq') {
      if (rfqHistory.length === 0) {
        el.historyList.innerHTML =
          '<div class="history-empty">No saved RFQs yet. Click Generate Request For Quotation to record an entry.</div>';
        el.loadIntoFormBtn.disabled = true;
        el.clearHistoryBtn.disabled = true;
        return;
      }

      el.loadIntoFormBtn.disabled = !selectedRfqHistoryId;
      el.clearHistoryBtn.disabled = false;

      el.historyList.innerHTML = rfqHistory
        .map((item) => {
          const activeClass = item.id === selectedRfqHistoryId ? ' active' : '';
          const tot = formatPlainDecimal(calculateRfqTotal(item.data.items)) || '0.00';
          return (
            '<button type="button" class="history-card' +
            activeClass +
            '" data-history-id="' +
            escapeHtml(item.id) +
            '">' +
            '<div class="history-card-code mono">' +
            escapeHtml(item.data.supplierName || 'SUPPLIER') +
            '</div>' +
            '<div class="history-card-winner">' +
            escapeHtml(item.data.referenceTitle || 'SF-GOOD-80') +
            '</div>' +
            '<div class="history-card-footer">' +
            '<span class="mono">₱ ' +
            escapeHtml(tot) +
            '</span>' +
            '<span class="history-card-tag">' +
            escapeHtml(item.tag || 'Saved') +
            '</span>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      el.historyList.querySelectorAll('.history-card').forEach((btn) => {
        btn.addEventListener('click', () => {
          loadRfqHistoryItem(btn.getAttribute('data-history-id'));
        });
      });
      return;
    }

    if (docMode === 'certificate') {
      if (certHistory.length === 0) {
        el.historyList.innerHTML =
          '<div class="history-empty">No saved certificates yet. Click Generate Certificate to record an entry.</div>';
        el.loadIntoFormBtn.disabled = true;
        el.clearHistoryBtn.disabled = true;
        return;
      }

      el.loadIntoFormBtn.disabled = !selectedCertHistoryId;
      el.clearHistoryBtn.disabled = false;

      el.historyList.innerHTML = certHistory
        .map((item) => {
          const activeClass = item.id === selectedCertHistoryId ? ' active' : '';
          return (
            '<button type="button" class="history-card' +
            activeClass +
            '" data-history-id="' +
            escapeHtml(item.id) +
            '">' +
            '<div class="history-card-code mono">' +
            escapeHtml(item.data.referenceTitle || 'cert. of completion') +
            '</div>' +
            '<div class="history-card-winner">' +
            escapeHtml(item.data.deliverySubject || '—') +
            '</div>' +
            '<div class="history-card-footer">' +
            '<span>' +
            escapeHtml(item.data.rightSignatoryName || '—') +
            '</span>' +
            '<span class="history-card-tag">' +
            escapeHtml(item.tag || 'Saved') +
            '</span>' +
            '</div>' +
            '</button>'
          );
        })
        .join('');

      el.historyList.querySelectorAll('.history-card').forEach((btn) => {
        btn.addEventListener('click', () => {
          loadCertHistoryItem(btn.getAttribute('data-history-id'));
        });
      });
      return;
    }

    if (history.length === 0) {
      el.historyList.innerHTML =
        '<div class="history-empty">No saved abstracts yet. Click Generate Document to record an entry.</div>';
      el.loadIntoFormBtn.disabled = true;
      el.clearHistoryBtn.disabled = true;
      return;
    }

    el.loadIntoFormBtn.disabled = !selectedHistoryId;
    el.clearHistoryBtn.disabled = false;

    el.historyList.innerHTML = history
      .map((item) => {
        const w = getWinner(item.data);
        const amt = formatCurrency(w.amountValue, '₱');
        const activeClass = item.id === selectedHistoryId ? ' active' : '';
        return (
          '<button type="button" class="history-card' +
          activeClass +
          '" data-history-id="' +
          escapeHtml(item.id) +
          '">' +
          '<div class="history-card-code mono">' +
          escapeHtml(item.data.abstractNumber || 'AC –0000-00-00') +
          '</div>' +
          '<div class="history-card-winner">Winner: ' +
          escapeHtml(w.bidder.name || '—') +
          '</div>' +
          '<div class="history-card-footer">' +
          '<span class="mono">' +
          escapeHtml(amt) +
          '</span>' +
          '<span class="history-card-tag">' +
          escapeHtml(item.tag || 'Saved') +
          '</span>' +
          '</div>' +
          '</button>'
        );
      })
      .join('');

    el.historyList.querySelectorAll('.history-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-history-id');
        loadHistoryItem(id);
      });
    });
  }

  function loadHistoryItem(id) {
    const item = history.find((h) => h.id === id);
    if (!item) return;
    selectedHistoryId = item.id;
    formData = structuredClone(item.data);
    if (!formData.signatories) formData.signatories = { ...DEFAULT_SIGNATORIES };
    syncInputsFromState();
    renderHistory();
  }

  function loadCertHistoryItem(id) {
    const item = certHistory.find((h) => h.id === id);
    if (!item) return;
    selectedCertHistoryId = item.id;
    certData = structuredClone(item.data);
    syncCertInputsFromState();
    renderHistory();
  }

  function loadRfqHistoryItem(id) {
    const item = rfqHistory.find((h) => h.id === id);
    if (!item) return;
    selectedRfqHistoryId = item.id;
    rfqData = structuredClone(item.data);
    syncRfqInputsFromState();
    renderHistory();
  }

  function loadPrHistoryItem(id) {
    const item = prHistory.find((h) => h.id === id);
    if (!item) return;
    selectedPrHistoryId = item.id;
    prData = structuredClone(item.data);
    syncPrInputsFromState();
    renderHistory();
  }

  function loadPoHistoryItem(id) {
    const item = poHistory.find((h) => h.id === id);
    if (!item) return;
    selectedPoHistoryId = item.id;
    poData = structuredClone(item.data);
    syncPoInputsFromState();
    renderHistory();
  }

  function buildSheetHtml(data) {
    const lp = formatPurposeLine(data.purpose, data.autoTrim);
    const winner = getWinner(data);
    const sym = data.currencyDocSymbol || 'P';
    const sig = data.signatories || DEFAULT_SIGNATORIES;
    const wName = (winner.bidder.name || '').trim().toUpperCase() || 'WINNING BIDDER';
    const wLoc = (winner.bidder.location || '').trim() || 'Maragondon, Cavite';
    const logoSrc = getActiveLogoSrc();

    const bidderRowsHtml = data.bidders
      .map((b, idx) => {
        const amt = formatCurrency(parseBidAmount(b.amountRaw), sym);
        const name = (b.name || '').trim().toUpperCase() || 'BIDDER ' + (idx + 1);
        const loc = (b.location || '').trim() || 'Maragondon, Cavite';
        return (
          '<div class="doc-bidder-row">' +
          '<div class="doc-bidder-name-wrap">' +
          '<span class="doc-bidder-num">' +
          (idx + 1) +
          '.</span>' +
          '<div><div>' +
          escapeHtml(name) +
          '</div><div>' +
          escapeHtml(loc) +
          '</div></div>' +
          '</div>' +
          '<div class="doc-bidder-amt">' +
          escapeHtml(amt) +
          '</div>' +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="print-sheet">' +
      '<div>' +
      '<div class="doc-header">' +
      '<div class="doc-seal-wrap">' +
      '<img src="' +
      escapeHtml(logoSrc) +
      '" onerror="this.onerror=null; this.src=\'assets/maragondon-logo.svg\';" alt="Maragondon Seal" class="doc-seal-img" />' +
      '</div>' +
      '<div class="doc-gov-text">' +
      '<div>Republic of the Philippines</div>' +
      '<div>Province of Cavite</div>' +
      '<div>MUNICIPALITY OF MARAGONDON</div>' +
      '</div>' +
      '<div></div>' +
      '</div>' +
      '<div class="doc-title">ABSTRACT OF CANVASS</div>' +
      '<p class="doc-purpose">' +
      escapeHtml(lp.full) +
      '</p>' +
      '<div class="doc-opened-wrap">' +
      '<div class="doc-opened-box">' +
      '<div>Opened at the Office of the Municipal</div>' +
      '<div>Mayor on ' +
      escapeHtml((data.openedDate || '').trim() || '—') +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div>' +
      '<div class="doc-table-head">' +
      '<div>NAME OF BIDDERS</div>' +
      '<div class="amt-head">AMOUNT OF BID</div>' +
      '</div>' +
      '<div class="doc-bidders-list">' +
      bidderRowsHtml +
      '</div>' +
      '</div>' +
      '<div class="doc-coa-block">' +
      '<div class="doc-coa-title">COMMITTEE ON AWARDS</div>' +
      '<div class="doc-sig-center">' +
      '<div class="doc-sig-name">' +
      escapeHtml(sig.chairmanName.toUpperCase()) +
      '</div>' +
      '<div class="doc-sig-role">' +
      escapeHtml(sig.chairmanTitle.toUpperCase()) +
      '</div>' +
      '</div>' +
      '<div class="doc-sig-center">' +
      '<div class="doc-sig-name">' +
      escapeHtml(sig.viceChairmanName.toUpperCase()) +
      '</div>' +
      '<div class="doc-sig-role">' +
      escapeHtml(sig.viceChairmanTitle.toUpperCase()) +
      '</div>' +
      '</div>' +
      '<div class="doc-sig-two-col">' +
      '<div>' +
      '<div class="doc-sig-name">' +
      escapeHtml(sig.member1Name.toUpperCase()) +
      '</div>' +
      '<div class="doc-sig-role">' +
      escapeHtml(sig.member1Title.toUpperCase()) +
      '</div>' +
      '</div>' +
      '<div>' +
      '<div class="doc-sig-name">' +
      escapeHtml(sig.member2Name.toUpperCase()) +
      '</div>' +
      '<div class="doc-sig-role">' +
      escapeHtml(sig.member2Title.toUpperCase()) +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="doc-sig-center">' +
      '<div class="doc-sig-name">' +
      escapeHtml(sig.member3Name.toUpperCase()) +
      '</div>' +
      '<div class="doc-sig-role">' +
      escapeHtml(sig.member3Title.toUpperCase()) +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div>' +
      '<p class="doc-award-clause">' +
      'Awarded to the lowest bidder, <strong>' +
      escapeHtml(wName) +
      '</strong>, ' +
      escapeHtml(wLoc) +
      ' same being reasonable and most advantageous to the government.' +
      '</p>' +
      '<div class="doc-ac-code">' +
      escapeHtml((data.abstractNumber || '').trim() || 'AC –0000-00-00') +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function buildCertificateSheetHtml(data) {
    const body = formatCertificateBody(data.deliverySubject, data.autoTrim);
    const hideNoted = shouldHideCertificateNotedBy(
      data.rightSignatoryName,
      data.rightSignatoryPosition,
      data.notedByName
    );
    const sizeClass =
      data.paperSize === 'legal'
        ? 'sheet-legal'
        : data.paperSize === 'a4'
        ? 'sheet-a4'
        : 'sheet-letter';

    const leftName = (data.leftSignatoryName || '').trim() || 'WILMA E. PIEDAD';
    const leftPos =
      (data.leftSignatoryPosition || '').trim() ||
      'Property Custodian/Inspection Officer';
    const rightName =
      (data.rightSignatoryName || '').trim() || 'RIA KRIS O. TIBAYAN';
    const rightPos = (data.rightSignatoryPosition || '').trim() || 'OIC Peso';
    const notedName =
      (data.notedByName || '').trim() || 'HERMINIA M. QUENERI';
    const notedPos =
      (data.notedByPosition || '').trim() || 'Mun. General Services Officer';

    return (
      '<div class="print-sheet cert-sheet ' +
      sizeClass +
      '">' +
      '<div class="cert-gov-header">' +
      '<div>Republic of the Philippines</div>' +
      '<div>Province of Cavite</div>' +
      '<div>MUNICIPALITY OF MARAGONDON</div>' +
      '<div class="cert-ooo">-oOo-</div>' +
      '</div>' +
      '<div class="cert-title">CERTIFICATE OF DELIVERY AND ACCEPTANCE</div>' +
      '<p class="cert-body-p">' +
      escapeHtml(body.full) +
      '</p>' +
      '<div class="cert-sig-grid' +
      (hideNoted ? ' cert-sig-grid-bottom' : '') +
      '">' +
      '<div>' +
      '<div class="cert-sig-bold-name">' +
      escapeHtml(leftName) +
      '</div>' +
      '<div class="cert-sig-bold-pos">' +
      escapeHtml(leftPos) +
      '</div>' +
      '</div>' +
      '<div>' +
      '<div class="cert-sig-reg-name">' +
      escapeHtml(rightName) +
      '</div>' +
      '<div class="cert-sig-reg-pos">' +
      escapeHtml(rightPos) +
      '</div>' +
      '</div>' +
      '</div>' +
      (hideNoted
        ? ''
        : '<div class="cert-noted-wrap">' +
          '<div class="cert-noted-label">Noted by:</div>' +
          '<div class="cert-noted-person">' +
          '<div class="cert-sig-bold-name">' +
          escapeHtml(notedName) +
          '</div>' +
          '<div class="cert-sig-bold-pos">' +
          escapeHtml(notedPos) +
          '</div>' +
          '</div>' +
          '</div>') +
      '</div>'
    );
  }

  function formatRfqCellNum(raw) {
    const num = parseBidAmount(raw);
    if (num === null) return String(raw || '').trim();
    return formatPlainDecimal(num);
  }

  function estimateRfqWrappedLines(description, charsPerLine) {
    const cpl = charsPerLine || 46;
    const trimmed = String(description || '').trim();
    if (!trimmed) return 1;
    return Math.max(1, Math.ceil(trimmed.length / cpl));
  }

  function getRfqTargetVisualRows(paperSize) {
    if (paperSize === 'legal') return 20;
    if (paperSize === 'a4') return 13;
    return 10;
  }

  function getRfqDenseThreshold(paperSize) {
    if (paperSize === 'legal') return 32;
    if (paperSize === 'a4') return 22;
    return 18;
  }

  function buildRfqSheetHtml(data) {
    const effectivePaper = data.paperSize || 'legal';
    const sizeClass =
      effectivePaper === 'legal'
        ? 'sheet-legal'
        : effectivePaper === 'a4'
        ? 'sheet-a4'
        : 'sheet-letter';
    const grandTotalFormatted = formatPlainDecimal(calculateRfqTotal(data.items)) || '0.00';
    const rows = structuredClone(data.items || []);
    const normalCap = getRfqTargetVisualRows(effectivePaper);
    const denseCap = getRfqDenseThreshold(effectivePaper);
    const normalLines = rows.reduce(
      (sum, row) => sum + estimateRfqWrappedLines(row.description, 46),
      0
    );
    const denseLines = rows.reduce(
      (sum, row) => sum + estimateRfqWrappedLines(row.description, 52),
      0
    );

    const density =
      normalLines <= normalCap
        ? 'normal'
        : denseLines <= denseCap
        ? 'dense'
        : 'ultra';
    const densityClass =
      density === 'ultra' ? ' rfq-ultra' : density === 'dense' ? ' rfq-dense' : '';

    const fillerCount =
      density === 'normal' ? Math.max(0, normalCap - normalLines) : 0;
    for (let i = 0; i < fillerCount; i++) {
      rows.push({
        itemNo: '',
        description: '',
        quantity: '',
        unitCost: '',
        totalAmount: '',
        isCenteredHeader: false,
      });
    }

    const rowsHtml = rows
      .map((row) => {
        const alignClass = row.isCenteredHeader ? 'text-align:center;' : 'text-align:left;';
        return (
          '<tr>' +
          '<td style="text-align:center;">' +
          (escapeHtml((row.itemNo || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="' +
          alignClass +
          '">' +
          (escapeHtml((row.description || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:center;">' +
          (escapeHtml((row.quantity || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:right;">' +
          (escapeHtml(formatRfqCellNum(row.unitCost)) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:right;">' +
          (escapeHtml(formatRfqCellNum(row.totalAmount)) || '&nbsp;') +
          '</td>' +
          '</tr>'
        );
      })
      .join('');

    return (
      '<div class="print-sheet rfq-sheet ' +
      sizeClass +
      densityClass +
      '">' +
      '<div class="rfq-sheet-top">' +
      '<div class="rfq-meta-head">' +
      '<div>Standard Form Number : SF-GOOD-80</div>' +
      '<div>Revised on : May 24, 2004</div>' +
      '<div>Standard Form Title : Request For Quotation</div>' +
      '</div>' +
      '<div class="rfq-date-wrap"><table class="rfq-date-table"><tbody>' +
      '<tr><td>Date:</td><td class="rfq-date-line">' +
      (escapeHtml((data.date || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '<tr><td>Quotation No.</td><td class="rfq-date-line">' +
      (escapeHtml((data.quotationNo || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '</tbody></table></div>' +
      '<div class="rfq-supplier-box">' +
      '<div class="rfq-supplier-line">' +
      (escapeHtml((data.supplierName || '').trim()) || '&nbsp;') +
      '</div>' +
      '<div class="rfq-supplier-line">' +
      (escapeHtml((data.supplierAddress || '').trim()) || '&nbsp;') +
      '</div>' +
      '</div>' +
      '<p class="rfq-intro-p">Please quote your lowest price on the item/s listed below, subject to the General Conditions on the last page, stating the shortest time of delivery and submit your quotation duly signed by your representative not later than <span class="rfq-deadline-blank">' +
      (escapeHtml((data.submissionDeadline || '').trim()) || '&nbsp;') +
      '</span> in the return envelope attached herewith.</p>' +
      '<div class="rfq-sig-wrap"><div class="rfq-sig-inner">' +
      '<div class="rfq-sig-name">' +
      escapeHtml((data.signatoryName || '').trim() || 'NOAH M. CAASI') +
      '</div>' +
      '<div class="rfq-sig-pos">' +
      escapeHtml((data.signatoryPosition || '').trim() || 'Municipal Administrator') +
      '</div>' +
      '</div></div>' +
      '<div class="rfq-note-block">' +
      '<div class="rfq-note-label">NOTE:</div>' +
      '<div class="rfq-note-lines">' +
      '<div>1.ALL ENTRIES MUST BE TYPEWRITTEN</div>' +
      '<div>2.DELIVERY PERIOD WITHIN <span class="rfq-note-u">30</span> CALENDAR DAYS.</div>' +
      '<div>3. WARRANTY SHALL BE FOR A PERIOD OF SIX (6) MONTHS FOR SUPPLIES AND<br/><span class="rfq-note-indent">MATERIALS. ONE (1) YEAR FOR EQUIPMENT FROM DATE OF ACCEPTANCE BY</span><br/><span class="rfq-note-indent">THE PROCURING ENTITY.</span></div>' +
      '<div>4. PRICE VALIDITY SHALL BE FOR A PERIOD OF <span class="rfq-note-u">365</span> CALENDAR DAYS</div>' +
      '<div>5. G-EPS REGISTRATION CERTIFICATE SHALL BE ATTACHED UPON SUBMISSION OF<br/><span class="rfq-note-indent">THE QUOTATION.</span></div>' +
      '<div>6. BIDDERS SHALL SUBMIT ORIGINAL BROCHURES SHOWING CERTIFICATIONS OF<br/><span class="rfq-note-indent">THE PRODUCT BEING OFFERED.</span></div>' +
      '</div></div>' +
      '</div>' +
      '<div class="rfq-table-grow">' +
      '<table class="rfq-items-doc-table"><thead><tr>' +
      '<th style="width:68px;">ITEM NO.</th>' +
      '<th>ITEM &amp; DESCRIPTION</th>' +
      '<th style="width:82px;">QUANTITY</th>' +
      '<th style="width:86px;">UNIT COST</th>' +
      '<th style="width:96px;">TOTAL AMOUNT</th>' +
      '</tr></thead><tbody>' +
      rowsHtml +
      '<tr class="rfq-doc-total-row"><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td style="text-align:right;">' +
      escapeHtml(grandTotalFormatted) +
      '</td></tr>' +
      '</tbody></table>' +
      '</div>' +
      '<div class="rfq-sheet-footer">' +
      '<div class="rfq-specs-wrap"><table class="rfq-specs-table"><tbody>' +
      '<tr><td style="width:135px;">Brand and Model&nbsp;&nbsp;:</td><td class="rfq-specs-line">' +
      (escapeHtml((data.brandAndModel || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '<tr><td>Delivery Period&nbsp;&nbsp;&nbsp;&nbsp;:</td><td class="rfq-specs-line">' +
      (escapeHtml((data.deliveryPeriod || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '<tr><td>Warranty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td><td class="rfq-specs-line">' +
      (escapeHtml((data.warranty || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '<tr><td>Price Validity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</td><td class="rfq-specs-line">' +
      (escapeHtml((data.priceValidity || '').trim()) || '&nbsp;') +
      '</td></tr>' +
      '</tbody></table></div>' +
      '<p class="rfq-accept-p">After having carefully read and accepted your General Conditions. We quote you on the item prices noted above.</p>' +
      '<div class="rfq-bidder-sig-wrap"><div class="rfq-bidder-sig-col">' +
      '<div class="rfq-bidder-sig-line">Printed Name/Signature</div>' +
      '<div class="rfq-bidder-sig-line">Tel. No./Cellphone No.</div><div>email address</div>' +
      '<div class="rfq-bidder-sig-line">Date</div>' +
      '</div></div>' +
      '</div>' +
      '</div>'
    );
  }

  function estimatePrWrappedLines(description, charsPerLine) {
    const cpl = charsPerLine || 42;
    const trimmed = String(description || '').trim();
    if (!trimmed) return 1;
    return Math.max(1, Math.ceil(trimmed.length / cpl));
  }

  function getPrTargetVisualRows(paperSize) {
    if (paperSize === 'legal') return 22;
    if (paperSize === 'a4') return 14;
    return 11;
  }

  function getPrDenseThreshold(paperSize) {
    if (paperSize === 'legal') return 36;
    if (paperSize === 'a4') return 25;
    return 20;
  }

  function buildPrSheetHtml(data) {
    const effectivePaper = data.paperSize || 'legal';
    const sizeClass =
      effectivePaper === 'legal'
        ? 'sheet-legal'
        : effectivePaper === 'a4'
        ? 'sheet-a4'
        : 'sheet-letter';
    const grandTotalFormatted = formatPlainDecimal(calculatePrTotal(data.items)) || '0.00';
    const rows = structuredClone(data.items || []);
    const normalCap = getPrTargetVisualRows(effectivePaper);
    const denseCap = getPrDenseThreshold(effectivePaper);
    const normalLines = rows.reduce(
      (sum, row) => sum + estimatePrWrappedLines(row.description, 42),
      0
    );
    const denseLines = rows.reduce(
      (sum, row) => sum + estimatePrWrappedLines(row.description, 48),
      0
    );
    const density =
      normalLines <= normalCap
        ? 'normal'
        : denseLines <= denseCap
        ? 'dense'
        : 'ultra';
    const densityClass =
      density === 'ultra' ? ' pr-ultra' : density === 'dense' ? ' pr-dense' : '';

    const fillerCount =
      density === 'normal' ? Math.max(0, normalCap - normalLines) : 0;
    for (let i = 0; i < fillerCount; i++) {
      rows.push({
        itemNo: '',
        unit: '',
        description: '',
        quantity: '',
        unitCost: '',
        totalCost: '',
      });
    }

    const logoSrc = getActiveLogoSrc();
    const rowsHtml = rows
      .map(
        (row) =>
          '<tr class="pr-item-row">' +
          '<td style="text-align:center;">' +
          (escapeHtml((row.itemNo || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:center;">' +
          (escapeHtml((row.unit || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td colspan="2" style="text-align:center;">' +
          (escapeHtml((row.description || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:center;">' +
          (escapeHtml((row.quantity || '').trim()) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:right;">' +
          (escapeHtml(formatRfqCellNum(row.unitCost)) || '&nbsp;') +
          '</td>' +
          '<td style="text-align:right;">' +
          (escapeHtml(formatRfqCellNum(row.totalCost)) || '&nbsp;') +
          '</td>' +
          '</tr>'
      )
      .join('');

    return (
      '<div class="print-sheet pr-sheet ' +
      sizeClass +
      densityClass +
      '">' +
      '<div class="pr-sheet-top">' +
      '<div class="pr-appendix">Appendix 47</div>' +
      '</div>' +
      '<div class="pr-box-grow">' +
      '<table class="pr-doc-table">' +
      '<colgroup>' +
      '<col style="width:13%;" /><col style="width:8%;" /><col style="width:19%;" /><col style="width:27%;" />' +
      '<col style="width:9%;" /><col style="width:11.5%;" /><col style="width:12.5%;" />' +
      '</colgroup>' +
      '<tbody>' +
      '<tr><td colspan="7" class="pr-top-header-td">' +
      '<div class="pr-head-grid">' +
      '<div class="doc-seal-wrap"><img src="' +
      escapeHtml(logoSrc) +
      '" onerror="this.onerror=null; this.src=\'assets/maragondon-logo.svg\';" alt="Maragondon Seal" class="pr-seal-img" /></div>' +
      '<div class="pr-head-center">' +
      '<div class="pr-main-title">PURCHASE REQUEST</div>' +
      '<div class="pr-sub-rep">Republic of the Philippines</div>' +
      '<div class="pr-sub-mun">MUNICIPAL GOVERNMENT OF MARAGONDON</div>' +
      '<div class="pr-sub-prov">MARAGONDON CAVITE</div>' +
      '</div>' +
      '<div></div>' +
      '</div>' +
      '</td></tr>' +
      '<tr>' +
      '<td colspan="4" class="pr-top-fund-td"></td>' +
      '<td colspan="3" class="pr-top-fund-td">FUND: ' +
      ((data.fund || '').trim() ? '<strong>' + escapeHtml(data.fund.trim()) + '</strong>' : '') +
      '</td>' +
      '</tr>' +
      '<tr class="pr-meta-row">' +
      '<td colspan="2" class="pr-meta-b">DEPARTMENT: ' +
      escapeHtml((data.department || '').trim()) +
      '</td>' +
      '<td colspan="2" class="pr-meta-b">PR NO.: <strong>' +
      escapeHtml((data.prNo || '').trim()) +
      '</strong></td>' +
      '<td colspan="3">DATE: <strong>' +
      escapeHtml((data.prDate || '').trim()) +
      '</strong></td>' +
      '</tr>' +
      '<tr class="pr-meta-row pr-meta-bottom">' +
      '<td colspan="2" class="pr-meta-b">SECTION: ' +
      escapeHtml((data.section || '').trim()) +
      '</td>' +
      '<td colspan="2" class="pr-meta-b">FPP: ' +
      escapeHtml((data.fpp || '').trim()) +
      '</td>' +
      '<td colspan="3">DATE: ' +
      escapeHtml((data.sectionDate || '').trim()) +
      '</td>' +
      '</tr>' +
      '<tr class="pr-items-head">' +
      '<th>Item No.</th><th>Unit</th><th colspan="2">Item Description</th><th>Quantity</th><th>Unit Cost</th><th>Total Cost</th>' +
      '</tr>' +
      rowsHtml +
      '<tr class="pr-total-row">' +
      '<td colspan="6" style="text-align:center;">TOTAL</td>' +
      '<td style="text-align:right;font-weight:700;">' +
      escapeHtml(grandTotalFormatted) +
      '</td>' +
      '</tr>' +
      '<tr><td colspan="7" class="pr-purpose-td"><div class="pr-purpose-flex">' +
      '<span class="pr-purpose-lbl">Purpose :</span>' +
      '<div class="pr-purpose-txt">' +
      (escapeHtml((data.purpose || '').trim()) || '&nbsp;') +
      '</div>' +
      '</div></td></tr>' +
      '<tr><td colspan="7" class="pr-app-td">' +
      '<div class="pr-app-line">I hereby certify that all items were included in the Annual Procurement Plan (APP)</div>' +
      '<div class="pr-cert-by-lbl">Certified by:</div>' +
      '<div class="pr-cert-by-person">' +
      '<div class="pr-cert-by-name">' +
      escapeHtml((data.certifiedByName || '').trim() || 'NOAH M. CAASI') +
      '</div>' +
      '<div class="pr-cert-by-pos">' +
      escapeHtml((data.certifiedByPosition || '').trim() || 'BAC Secretary') +
      '</div>' +
      '</div></td></tr>' +
      '<tr>' +
      '<td class="pr-sig-cell"></td>' +
      '<td colspan="2" class="pr-sig-cell" style="text-align:center;padding-top:4px;">' +
      escapeHtml((data.requestedByLabel || '').trim() || 'Requested by:') +
      '</td>' +
      '<td class="pr-sig-cell" style="text-align:center;padding-top:4px;">' +
      escapeHtml((data.cashAvailLabel || '').trim() || 'Cash Availability:') +
      '</td>' +
      '<td colspan="3" class="pr-sig-cell last-col" style="text-align:center;padding-top:4px;">' +
      escapeHtml((data.approvedByLabel || '').trim() || 'Approved by:') +
      '</td>' +
      '</tr>' +
      '<tr class="pr-sig-space">' +
      '<td class="pr-sig-cell pr-sig-cal" style="vertical-align:bottom;">Signature :</td>' +
      '<td colspan="2" class="pr-sig-cell"></td>' +
      '<td class="pr-sig-cell"></td>' +
      '<td colspan="3" class="pr-sig-cell last-col"></td>' +
      '</tr>' +
      '<tr>' +
      '<td class="pr-sig-cell pr-sig-cal">Printed Name :</td>' +
      '<td colspan="2" class="pr-sig-cell" style="text-align:center;font-weight:700;">' +
      escapeHtml((data.requestedByName || '').trim() || 'HERMINIA M. QUENERI') +
      '</td>' +
      '<td class="pr-sig-cell" style="text-align:center;font-weight:700;">' +
      escapeHtml((data.cashAvailName || '').trim() || 'JOVITA A. NOVELO') +
      '</td>' +
      '<td colspan="3" class="pr-sig-cell last-col" style="text-align:center;font-weight:700;">' +
      escapeHtml((data.approvedByName || '').trim() || 'HON. LAWRENCE N. ARCA') +
      '</td>' +
      '</tr>' +
      '<tr class="pr-sig-desig">' +
      '<td class="pr-sig-cell pr-sig-cal">Designation :</td>' +
      '<td colspan="2" class="pr-sig-cell" style="text-align:center;">' +
      escapeHtml((data.requestedByDesignation || '').trim() || 'Municipal GSO') +
      '</td>' +
      '<td class="pr-sig-cell" style="text-align:center;">' +
      escapeHtml((data.cashAvailDesignation || '').trim() || 'Acting Mun. Treasurer') +
      '</td>' +
      '<td colspan="3" class="pr-sig-cell last-col" style="text-align:center;">' +
      escapeHtml((data.approvedByDesignation || '').trim() || 'Municipal Mayor') +
      '</td>' +
      '</tr>' +
      '</tbody></table></div></div>'
    );
  }

  function estimatePoWrappedLines(description, charsPerLine) {
    const cpl = charsPerLine || 40;
    const trimmed = String(description || '').trim();
    if (!trimmed) return 1;
    return Math.max(1, Math.ceil(trimmed.length / cpl));
  }

  function getPoTargetVisualRows(paperSize) {
    if (paperSize === 'legal') return 25;
    if (paperSize === 'a4') return 16;
    return 13;
  }

  function getPoDenseThreshold(paperSize) {
    if (paperSize === 'legal') return 38;
    if (paperSize === 'a4') return 27;
    return 22;
  }

  function buildPoSheetHtml(data) {
    const effectivePaper = data.paperSize || 'a4';
    const sizeClass =
      effectivePaper === 'legal'
        ? 'sheet-legal'
        : effectivePaper === 'letter'
        ? 'sheet-letter'
        : 'sheet-a4';
    const grandTotal = calculatePoTotal(data.items);
    const grandTotalFormatted = formatPlainDecimal(grandTotal) || '0.00';
    const resolvedWords = data.autoAmountInWords
      ? numberToPesosWords(grandTotal)
      : (data.amountInWords || '').trim() || numberToPesosWords(grandTotal);

    const rows = structuredClone(data.items || []);
    const normalCap = getPoTargetVisualRows(effectivePaper);
    const denseCap = getPoDenseThreshold(effectivePaper);
    const normalLines = rows.reduce(
      (sum, row) => sum + estimatePoWrappedLines(row.description, 40),
      0
    );
    const denseLines = rows.reduce(
      (sum, row) => sum + estimatePoWrappedLines(row.description, 46),
      0
    );
    const density =
      normalLines <= normalCap ? 'normal' : denseLines <= denseCap ? 'dense' : 'ultra';
    const densityClass =
      density === 'ultra' ? ' po-ultra' : density === 'dense' ? ' po-dense' : '';

    const fillerCount = density === 'normal' ? Math.max(0, normalCap - normalLines) : 0;
    for (let i = 0; i < fillerCount; i++) {
      rows.push({
        stockNo: '',
        unit: '',
        description: '',
        quantity: '',
        unitCost: '',
        amount: '',
        isCenteredHeader: false,
      });
    }

    const rowsHtml = rows
      .map(
        (row) =>
          '<tr>' +
          '<td style="text-align:center;">' + (escapeHtml((row.stockNo || '').trim()) || '&nbsp;') + '</td>' +
          '<td style="text-align:center;">' + (escapeHtml((row.unit || '').trim()) || '&nbsp;') + '</td>' +
          '<td class="po-mid-divider" style="text-align:center;">' + (escapeHtml((row.description || '').trim()) || '&nbsp;') + '</td>' +
          '<td style="text-align:center;">' + (row.isCenteredHeader ? '&nbsp;' : (escapeHtml((row.quantity || '').trim()) || '&nbsp;')) + '</td>' +
          '<td style="text-align:right;">' + (row.isCenteredHeader ? '&nbsp;' : (escapeHtml(formatRfqCellNum(row.unitCost)) || '&nbsp;')) + '</td>' +
          '<td style="text-align:right;">' + (row.isCenteredHeader ? '&nbsp;' : (escapeHtml(formatRfqCellNum(row.amount)) || '&nbsp;')) + '</td>' +
          '</tr>'
      )
      .join('');

    const conformeName = (data.conformeSupplierName || '').trim() || (data.supplier || '').trim() || "MAHARLIKA'S RESTAURANT";
    const officialName = (data.authorizedOfficialName || '').trim() || 'HON. LAWRENCE N. ARCA';
    const officialDesig = (data.authorizedOfficialDesignation || '').trim() || 'Municipal Mayor';
    const sangSecLabel = (data.sanggunianSecretaryLabel || '').trim() || 'Secretary to the Sanggunian';

    return (
      '<div class="print-sheet po-sheet ' + sizeClass + densityClass + '">' +
      '<div class="po-sheet-top">' +
      '<div class="po-appendix">Appendix 49</div>' +
      '<div class="po-header-center">' +
      '<div class="po-main-title">PURCHASE ORDER</div>' +
      '<div class="po-mun-title">MUNICIPALITY OF MARAGONDON</div>' +
      '<div class="po-lgu-title">LGU</div>' +
      '</div>' +
      '<div class="po-split-box po-split-box-upper">' +
      '<div class="po-split-left">' +
      '<div class="po-meta-line"><span class="po-lbl-72">Supplier :</span><span class="po-ul-val"><strong>' + (escapeHtml((data.supplier || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '<div class="po-meta-line"><span class="po-lbl-72">Address :</span><span class="po-ul-val">' + (escapeHtml((data.address || '').trim()) || '&nbsp;') + '</span></div>' +
      '<div style="height:10px;"></div>' +
      '<div class="po-meta-line"><span class="po-lbl-72">TIN :</span><span style="flex:1;min-height:15px;">' + (escapeHtml((data.tin || '').trim()) || '&nbsp;') + '</span></div>' +
      '</div>' +
      '<div class="po-split-right">' +
      '<div class="po-meta-line"><span class="po-lbl-96">P.O. No. :</span><span class="po-ul-val"><strong>' + (escapeHtml((data.poNo || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '<div class="po-meta-line"><span class="po-lbl-96">Date:</span><span class="po-ul-val">' + (escapeHtml((data.poDate || '').trim()) || '&nbsp;') + '</span></div>' +
      '<div class="po-meta-line"><span style="font-weight:700;flex-shrink:0;">Mode of Procurement :</span><span><strong>' + (escapeHtml((data.modeOfProcurement || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '<div class="po-meta-line"><span class="po-lbl-96">PR No./s</span><span style="flex:1;text-align:center;"><strong>' + (escapeHtml((data.prNos || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '</div>' +
      '</div>' +
      '<div class="po-salutation"><div>Gentlemen:</div><div class="po-salutation-indent">Please furnish this Office the following articles subject to the terms and conditions contained herein:</div></div>' +
      '<div class="po-split-box">' +
      '<div class="po-split-left">' +
      '<div class="po-meta-line"><span style="font-weight:700;flex-shrink:0;">Place of Delivery</span><span><strong>' + (escapeHtml((data.placeOfDelivery || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '<div class="po-meta-line"><span style="font-weight:700;flex-shrink:0;">Date of Delivery :</span><span class="po-ul-val">' + (escapeHtml((data.dateOfDelivery || '').trim()) || '&nbsp;') + '</span></div>' +
      '</div>' +
      '<div class="po-split-right">' +
      '<div class="po-meta-line"><span class="po-lbl-96">Delivery Term :</span><span><strong>' + (escapeHtml((data.deliveryTerm || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '<div class="po-meta-line"><span class="po-lbl-96">Payment Term :</span><span><strong>' + (escapeHtml((data.paymentTerm || '').trim()) || '&nbsp;') + '</strong></span></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="po-table-grow">' +
      '<table class="po-doc-table">' +
      '<colgroup><col style="width:11%;" /><col style="width:8%;" /><col style="width:41%;" /><col style="width:13%;" /><col style="width:13%;" /><col style="width:14%;" /></colgroup>' +
      '<thead><tr><th>Stock/ Property<br/>No.</th><th>Unit</th><th class="po-mid-divider">Description</th><th>Quantity</th><th>Unit Cost</th><th>Amount</th></tr></thead>' +
      '<tbody>' +
      rowsHtml +
      '<tr class="po-total-words-row">' +
      '<td colspan="2" style="font-weight:700;white-space:nowrap;">Total-amount in Words)</td>' +
      '<td colspan="3">' + escapeHtml(resolvedWords) + '</td>' +
      '<td style="text-align:right;font-weight:700;">' + escapeHtml(grandTotalFormatted) + '</td>' +
      '</tr>' +
      '</tbody></table></div>' +
      '<div class="po-sheet-footer">' +
      '<p class="po-penalty-p">In case of failure to make the full delivery within the time specified above, a penalty of one-tenth (1/10) of one percent for every day of delay shall be imposed on the undelivered item/s.</p>' +
      '<div class="po-sig-cols">' +
      '<div class="po-conforme-col"><div>Conforme:</div>' +
      '<div class="po-sig-block-center">' +
      '<div class="po-sig-bold-name">' + escapeHtml(conformeName) + '</div>' +
      '<div class="po-sig-sub">Signature over Printed Name of Supplier</div>' +
      '<div class="po-sig-underline" style="margin-top:16px;font-size:10.5px;">' + (escapeHtml((data.conformeDate || '').trim()) || '&nbsp;') + '</div>' +
      '<div class="po-sig-sub">Date</div>' +
      '</div></div>' +
      '<div class="po-official-col"><div>Very truly yours,</div>' +
      '<div class="po-sig-block-center">' +
      '<div class="po-sig-bold-name">' + escapeHtml(officialName) + '</div>' +
      '<div class="po-sig-sub">Signature over Printed Name of Authorized Official</div>' +
      '<div class="po-sig-underline" style="margin-top:6px;">' + escapeHtml(officialDesig) + '</div>' +
      '<div class="po-sig-sub">Designation</div>' +
      '</div></div>' +
      '</div>' +
      '<div class="po-sanggunian-box">' +
      '<div class="po-sang-note">(In case of Negotiated Purchase pursuant to Section 369 (a) of RA 7160, this portion must be accomplished.)</div>' +
      '<div class="po-sang-res-row"><span style="flex-shrink:0;">Approved per Sanggunian Resolution No.:</span><span class="po-ul-val" style="text-align:center;">' + (escapeHtml((data.sanggunianResNo || '').trim()) || '&nbsp;') + '</span></div>' +
      '<div class="po-sang-cert-lbl">Certified Correct:</div>' +
      '<div class="po-sang-sig-grid">' +
      '<div><div class="po-sig-underline" style="font-weight:600;">' + (escapeHtml((data.sanggunianSecretaryName || '').trim()) || '&nbsp;') + '</div><div class="po-sig-sub">' + escapeHtml(sangSecLabel) + '</div></div>' +
      '<div><div class="po-sig-underline">' + (escapeHtml((data.sanggunianDate || '').trim()) || '&nbsp;') + '</div><div class="po-sig-sub">Date</div></div>' +
      '</div></div>' +
      '</div></div>'
    );
  }

  function renderPreviewModal() {
    if (docMode === 'po') {
      el.previewModalTitle.textContent =
        'Document Preview — PO (' + (poData.supplier || poData.prNos || 'Purchase Order') + ')';
      el.previewModalSub.textContent =
        'Appendix 49 Format (' +
        (poData.paperSize === 'legal'
          ? 'Legal Bond Paper 8.5" × 14"'
          : poData.paperSize === 'letter'
          ? 'Letter Bond Paper 8.5" × 11"'
          : 'A4 Bond Paper 210 × 297 mm') +
        ')';

      el.currencyFmtGroup.hidden = true;
      el.toggleSigBtn.hidden = true;
      el.signatoriesDrawer.hidden = true;
      el.certPaperGroup.hidden = false;
      el.paperLetterBtn.classList.toggle('active', poData.paperSize === 'letter');
      el.paperA4Btn.classList.toggle('active', poData.paperSize === 'a4' || !poData.paperSize);
      el.paperLegalBtn.classList.toggle('active', poData.paperSize === 'legal');

      const hasMultiple = poHistory.length > 1;
      el.viewModeGroup.hidden = !hasMultiple;
      el.downloadAllDocxBtn.hidden = !hasMultiple;
      el.downloadAllDocxBtn.textContent = 'Export All (' + poHistory.length + ')';
      el.viewAllBtn.textContent = 'All History (' + poHistory.length + ')';
      el.viewSingleBtn.classList.toggle('active', viewMode === 'single');
      el.viewAllBtn.classList.toggle('active', viewMode === 'all');

      const sheets =
        viewMode === 'all' && poHistory.length > 0
          ? poHistory.map((h) => ({ ...h.data, paperSize: poData.paperSize }))
          : [poData];

      el.previewStage.innerHTML = sheets.map(buildPoSheetHtml).join('');
      return;
    }

    if (docMode === 'pr') {
      el.previewModalTitle.textContent =
        'Document Preview — PR No. ' + (prData.prNo || 'Purchase Request');
      el.previewModalSub.textContent =
        'Appendix 47 Format (' +
        (prData.paperSize === 'legal'
          ? 'Legal Bond Paper 8.5" × 14"'
          : prData.paperSize === 'a4'
          ? 'A4 Bond Paper 210 × 297 mm'
          : 'Letter Bond Paper 8.5" × 11"') +
        ')';

      el.currencyFmtGroup.hidden = true;
      el.toggleSigBtn.hidden = true;
      el.signatoriesDrawer.hidden = true;
      el.certPaperGroup.hidden = false;
      el.paperLetterBtn.classList.toggle(
        'active',
        prData.paperSize !== 'legal' && prData.paperSize !== 'a4'
      );
      el.paperA4Btn.classList.toggle('active', prData.paperSize === 'a4');
      el.paperLegalBtn.classList.toggle('active', prData.paperSize === 'legal');

      const hasMultiple = prHistory.length > 1;
      el.viewModeGroup.hidden = !hasMultiple;
      el.downloadAllDocxBtn.hidden = !hasMultiple;
      el.downloadAllDocxBtn.textContent = 'Export All (' + prHistory.length + ')';
      el.viewAllBtn.textContent = 'All History (' + prHistory.length + ')';
      el.viewSingleBtn.classList.toggle('active', viewMode === 'single');
      el.viewAllBtn.classList.toggle('active', viewMode === 'all');

      const sheets =
        viewMode === 'all' && prHistory.length > 0
          ? prHistory.map((h) => ({ ...h.data, paperSize: prData.paperSize }))
          : [prData];

      el.previewStage.innerHTML = sheets.map(buildPrSheetHtml).join('');
      return;
    }

    if (docMode === 'rfq') {
      el.previewModalTitle.textContent =
        'Document Preview — ' +
        (rfqData.referenceTitle || 'Request For Quotation (SF-GOOD-80)');
      el.previewModalSub.textContent =
        'SF-GOOD-80 Format (Calibri · ' +
        (rfqData.paperSize === 'legal'
          ? 'Legal Bond Paper 8.5" × 14"'
          : rfqData.paperSize === 'a4'
          ? 'A4 Bond Paper 210 × 297 mm'
          : 'Letter Bond Paper 8.5" × 11"') +
        ')';

      el.currencyFmtGroup.hidden = true;
      el.toggleSigBtn.hidden = true;
      el.signatoriesDrawer.hidden = true;
      el.certPaperGroup.hidden = false;
      el.paperLetterBtn.classList.toggle(
        'active',
        rfqData.paperSize !== 'legal' && rfqData.paperSize !== 'a4'
      );
      el.paperA4Btn.classList.toggle('active', rfqData.paperSize === 'a4');
      el.paperLegalBtn.classList.toggle('active', rfqData.paperSize === 'legal');

      const hasMultiple = rfqHistory.length > 1;
      el.viewModeGroup.hidden = !hasMultiple;
      el.downloadAllDocxBtn.hidden = !hasMultiple;
      el.downloadAllDocxBtn.textContent = 'Export All (' + rfqHistory.length + ')';
      el.viewAllBtn.textContent = 'All History (' + rfqHistory.length + ')';
      el.viewSingleBtn.classList.toggle('active', viewMode === 'single');
      el.viewAllBtn.classList.toggle('active', viewMode === 'all');

      const sheets =
        viewMode === 'all' && rfqHistory.length > 0
          ? rfqHistory.map((h) => ({ ...h.data, paperSize: rfqData.paperSize }))
          : [rfqData];

      el.previewStage.innerHTML = sheets.map(buildRfqSheetHtml).join('');
      return;
    }

    if (docMode === 'certificate') {
      el.previewModalTitle.textContent =
        'Document Preview — ' +
        (certData.referenceTitle || 'Certificate of Delivery & Acceptance');
      el.previewModalSub.textContent =
        'MS Word Format (Times New Roman · ' +
        (certData.paperSize === 'legal'
          ? 'Legal Bond Paper 8.5" × 14"'
          : certData.paperSize === 'a4'
          ? 'A4 Bond Paper 210 × 297 mm'
          : 'Letter Bond Paper 8.5" × 11"') +
        ')';

      el.currencyFmtGroup.hidden = true;
      el.toggleSigBtn.hidden = true;
      el.signatoriesDrawer.hidden = true;
      el.certPaperGroup.hidden = false;
      el.paperLetterBtn.classList.toggle(
        'active',
        certData.paperSize !== 'legal' && certData.paperSize !== 'a4'
      );
      el.paperA4Btn.classList.toggle('active', certData.paperSize === 'a4');
      el.paperLegalBtn.classList.toggle('active', certData.paperSize === 'legal');

      const hasMultiple = certHistory.length > 1;
      el.viewModeGroup.hidden = !hasMultiple;
      el.downloadAllDocxBtn.hidden = !hasMultiple;
      el.downloadAllDocxBtn.textContent = 'Export All (' + certHistory.length + ')';
      el.viewAllBtn.textContent = 'All History (' + certHistory.length + ')';
      el.viewSingleBtn.classList.toggle('active', viewMode === 'single');
      el.viewAllBtn.classList.toggle('active', viewMode === 'all');

      const sheets =
        viewMode === 'all' && certHistory.length > 0
          ? certHistory.map((h) => ({ ...h.data, paperSize: certData.paperSize }))
          : [certData];

      el.previewStage.innerHTML = sheets.map(buildCertificateSheetHtml).join('');
      return;
    }

    el.previewModalTitle.textContent =
      'Document Preview — ' + (formData.abstractNumber || 'Abstract of Canvass');
    el.previewModalSub.textContent =
      'MS Word Format (Times New Roman · Legal Bond Paper 8.5" × 14")';
    el.currencyFmtGroup.hidden = false;
    el.toggleSigBtn.hidden = false;
    el.certPaperGroup.hidden = true;
    el.fmtPBtn.classList.toggle('active', formData.currencyDocSymbol === 'P');
    el.fmtPesoBtn.classList.toggle('active', formData.currencyDocSymbol === '₱');

    const hasMultiple = history.length > 1;
    el.viewModeGroup.hidden = !hasMultiple;
    el.downloadAllDocxBtn.hidden = !hasMultiple;
    el.downloadAllDocxBtn.textContent = 'Export All (' + history.length + ')';
    el.viewAllBtn.textContent = 'All History (' + history.length + ')';
    el.viewSingleBtn.classList.toggle('active', viewMode === 'single');
    el.viewAllBtn.classList.toggle('active', viewMode === 'all');

    const sheets =
      viewMode === 'all' && history.length > 0
        ? history.map((h) => ({
            ...h.data,
            currencyDocSymbol: formData.currencyDocSymbol,
            signatories: formData.signatories,
          }))
        : [formData];

    el.previewStage.innerHTML = sheets.map(buildSheetHtml).join('');
  }

  function base64ToUint8Array(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  async function rasterizeSealToPng() {
    if (customLogoDataUrl) {
      if (customLogoDataUrl.startsWith('data:image/png;base64,')) {
        try {
          return base64ToUint8Array(customLogoDataUrl.slice('data:image/png;base64,'.length));
        } catch (_) {}
      }
      const fromCustom = await new Promise((resolve) => {
        try {
          const tempImg = new Image();
          tempImg.onload = function () {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = 220;
              canvas.height = 220;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(tempImg, 0, 0, 220, 220);
              canvas.toBlob(async (blob) => {
                if (!blob) return resolve(null);
                const buf = await blob.arrayBuffer();
                resolve(new Uint8Array(buf));
              }, 'image/png');
            } catch (_) {
              resolve(null);
            }
          };
          tempImg.onerror = function () {
            resolve(null);
          };
          tempImg.src = customLogoDataUrl;
        } catch (_) {
          resolve(null);
        }
      });
      if (fromCustom) return fromCustom;
    }

    try {
      const res = await fetch('assets/maragondon-logo.png');
      if (res.ok) {
        const buf = await res.arrayBuffer();
        return new Uint8Array(buf);
      }
    } catch (_) {}

    if (window.DEFAULT_MARAGONDON_SEAL_B64) {
      try {
        return base64ToUint8Array(window.DEFAULT_MARAGONDON_SEAL_B64);
      } catch (_) {}
    }

    return null;
  }

  async function exportWordDocuments(items, filename) {
    // Use real docx library if loaded from CDN, else clean Word-compatible .doc fallback
    if (window.docx) {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        ImageRun,
        Packer,
        PageBreak,
        PageOrientation,
        Paragraph,
        Table,
        TableCell,
        TableLayoutType,
        TableRow,
        TextRun,
        VerticalAlign,
        WidthType,
      } = window.docx;

      // Legal Paper: 8.5in x 14in in DXA
      const LEGAL_WIDTH_DXA = 12240;
      const LEGAL_HEIGHT_DXA = 20160;
      const MARGIN_TOP_DXA = 936;
      const MARGIN_BOTTOM_DXA = 936;
      const MARGIN_LEFT_DXA = 1152;
      const MARGIN_RIGHT_DXA = 1152;
      const CONTENT_WIDTH_DXA = LEGAL_WIDTH_DXA - MARGIN_LEFT_DXA - MARGIN_RIGHT_DXA; // 9936 DXA

      const NO_BORDER_SIDE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
      const NO_CELL_BORDERS = {
        top: NO_BORDER_SIDE,
        bottom: NO_BORDER_SIDE,
        left: NO_BORDER_SIDE,
        right: NO_BORDER_SIDE,
      };
      const NO_TABLE_BORDERS = {
        ...NO_CELL_BORDERS,
        insideHorizontal: NO_BORDER_SIDE,
        insideVertical: NO_BORDER_SIDE,
      };
      const ZERO_CELL_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

      const tnr = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Times New Roman' },
          color: '000000',
          bold: Boolean(opts.bold),
          size: Math.round((opts.sizePt || 11.5) * 2),
        });

      const sealPng = await rasterizeSealToPng();
      const children = [];

      items.forEach((item, pageIndex) => {
        if (pageIndex > 0) {
          children.push(new Paragraph({ children: [new PageBreak()] }));
        }
        const lp = formatPurposeLine(item.purpose, item.autoTrim);
        const winner = getWinner(item);
        const sym = item.currencyDocSymbol || 'P';
        const sig = item.signatories || DEFAULT_SIGNATORIES;

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [1440, 7056, 1440],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 1440, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0 },
                        children: sealPng
                          ? [
                              new ImageRun({
                                type: 'png',
                                data: sealPng,
                                transformation: { width: 80, height: 80 },
                                altText: {
                                  title: 'Municipality of Maragondon Seal',
                                  description: 'Official Seal of Municipality of Maragondon, Cavite',
                                  name: 'MaragondonSeal',
                                },
                              }),
                            ]
                          : [tnr('')],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 7056, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr('Republic of the Philippines', { sizePt: 12 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr('Province of Cavite', { sizePt: 12 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr('MUNICIPALITY OF MARAGONDON', { sizePt: 12 })],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 1440, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        spacing: { before: 0, after: 0 },
                        children: [tnr('')],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 440, after: 360 },
            children: [tnr('ABSTRACT OF CANVASS', { bold: true, sizePt: 13.5 })],
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 0, after: 360, line: 300 },
            children: [tnr(lp.full, { sizePt: 11.5 })],
          }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [4800, 5136],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 4800, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        spacing: { before: 0, after: 0 },
                        children: [tnr('')],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 5136, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr('Opened at the Office of the Municipal', { sizePt: 11 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 400, line: 288 },
                        children: [
                          tnr('Mayor on ' + ((item.openedDate || '').trim() || '—'), {
                            sizePt: 11,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        const bidderRows = [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 6800, type: WidthType.DXA },
                borders: NO_CELL_BORDERS,
                margins: ZERO_CELL_MARGINS,
                children: [
                  new Paragraph({
                    spacing: { before: 80, after: 280 },
                    children: [tnr('NAME OF BIDDERS', { bold: true, sizePt: 12 })],
                  }),
                ],
              }),
              new TableCell({
                width: { size: 3136, type: WidthType.DXA },
                borders: NO_CELL_BORDERS,
                margins: ZERO_CELL_MARGINS,
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 80, after: 280 },
                    children: [tnr('AMOUNT OF BID', { bold: true, sizePt: 12 })],
                  }),
                ],
              }),
            ],
          }),
        ];

        item.bidders.forEach((b, idx) => {
          const amtText = formatCurrency(parseBidAmount(b.amountRaw), sym);
          bidderRows.push(
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 6800, type: WidthType.DXA },
                  borders: NO_CELL_BORDERS,
                  margins: ZERO_CELL_MARGINS,
                  children: [
                    new Paragraph({
                      indent: { left: 720, hanging: 360 },
                      spacing: { before: 60, after: 0, line: 288 },
                      children: [
                        tnr(idx + 1 + '.\t' + ((b.name || '').trim().toUpperCase() || 'BIDDER'), {
                          sizePt: 11.5,
                        }),
                      ],
                    }),
                    new Paragraph({
                      indent: { left: 720 },
                      spacing: { before: 0, after: 300, line: 288 },
                      children: [
                        tnr((b.location || '').trim() || 'Maragondon, Cavite', { sizePt: 11.5 }),
                      ],
                    }),
                  ],
                }),
                new TableCell({
                  width: { size: 3136, type: WidthType.DXA },
                  borders: NO_CELL_BORDERS,
                  margins: ZERO_CELL_MARGINS,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { before: 60, after: 300, line: 288 },
                      children: [tnr(amtText, { sizePt: 11.5 })],
                    }),
                  ],
                }),
              ],
            })
          );
        });

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [6800, 3136],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: bidderRows,
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 440, after: 520 },
            children: [tnr('COMMITTEE ON AWARDS', { bold: true, sizePt: 12 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 440, after: 0, line: 276 },
            children: [tnr(sig.chairmanName.toUpperCase(), { bold: true, sizePt: 11.5 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 520, line: 276 },
            children: [tnr(sig.chairmanTitle.toUpperCase(), { sizePt: 10 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 440, after: 0, line: 276 },
            children: [tnr(sig.viceChairmanName.toUpperCase(), { bold: true, sizePt: 11.5 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 520, line: 276 },
            children: [tnr(sig.viceChairmanTitle.toUpperCase(), { sizePt: 10 })],
          }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [4968, 4968],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 4968, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 440, after: 0, line: 276 },
                        children: [tnr(sig.member1Name.toUpperCase(), { bold: true, sizePt: 11.5 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 520, line: 276 },
                        children: [tnr(sig.member1Title.toUpperCase(), { sizePt: 10 })],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: 4968, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 440, after: 0, line: 276 },
                        children: [tnr(sig.member2Name.toUpperCase(), { bold: true, sizePt: 11.5 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 520, line: 276 },
                        children: [tnr(sig.member2Title.toUpperCase(), { sizePt: 10 })],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 440, after: 0, line: 276 },
            children: [tnr(sig.member3Name.toUpperCase(), { bold: true, sizePt: 11.5 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 560, line: 276 },
            children: [tnr(sig.member3Title.toUpperCase(), { sizePt: 10 })],
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 160, after: 440, line: 300 },
            children: [
              tnr('Awarded to the lowest bidder, ', { sizePt: 11 }),
              tnr((winner.bidder.name || '').trim().toUpperCase() || 'WINNING BIDDER', {
                bold: true,
                sizePt: 11,
              }),
              tnr(
                ', ' +
                  ((winner.bidder.location || '').trim() || 'Maragondon, Cavite') +
                  ' same being reasonable and most advantageous to the government.',
                { sizePt: 11 }
              ),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 120, after: 0 },
            children: [tnr((item.abstractNumber || '').trim() || 'AC –0000-00-00', { sizePt: 11 })],
          })
        );
      });

      const doc = new Document({
        styles: {
          default: {
            document: {
              run: {
                font: 'Times New Roman',
                color: '000000',
                size: 23,
              },
            },
          },
        },
        sections: [
          {
            properties: {
              page: {
                size: {
                  width: LEGAL_WIDTH_DXA,
                  height: LEGAL_HEIGHT_DXA,
                  orientation: PageOrientation.PORTRAIT,
                },
                margin: {
                  top: MARGIN_TOP_DXA,
                  bottom: MARGIN_BOTTOM_DXA,
                  left: MARGIN_LEFT_DXA,
                  right: MARGIN_RIGHT_DXA,
                },
              },
            },
            children,
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename + '.docx');
      return;
    }

    // Offline fallback (.doc Word-compatible HTML on Legal paper)
    const sealDataSrc =
      customLogoDataUrl ||
      (window.DEFAULT_MARAGONDON_SEAL_B64
        ? 'data:image/png;base64,' + window.DEFAULT_MARAGONDON_SEAL_B64
        : '');

    const htmlPages = items
      .map((item) => {
        const lp = formatPurposeLine(item.purpose, item.autoTrim);
        const winner = getWinner(item);
        const sym = item.currencyDocSymbol || 'P';
        const sig = item.signatories || DEFAULT_SIGNATORIES;
        const wName = (winner.bidder.name || '').trim().toUpperCase() || 'WINNING BIDDER';
        const wLoc = (winner.bidder.location || '').trim() || 'Maragondon, Cavite';

        const bidderHtml = item.bidders
          .map((b, idx) => {
            const amt = formatCurrency(parseBidAmount(b.amountRaw), sym);
            const name = (b.name || '').trim().toUpperCase() || 'BIDDER ' + (idx + 1);
            const loc = (b.location || '').trim() || 'Maragondon, Cavite';
            return (
              '<tr>' +
              '<td style="padding:4pt 0 8pt 24pt;vertical-align:top;">' +
              (idx + 1) +
              '.&nbsp;&nbsp;&nbsp;' +
              escapeHtml(name) +
              '<br/><span style="padding-left:18pt;">' +
              escapeHtml(loc) +
              '</span></td>' +
              '<td style="padding:4pt 0 8pt 0;text-align:center;vertical-align:top;">' +
              escapeHtml(amt) +
              '</td></tr>'
            );
          })
          .join('');

        return (
          '<div class="Section1">' +
          '<table style="width:100%;border-collapse:collapse;"><tr>' +
          '<td style="width:18%;text-align:center;">' +
          (sealDataSrc ? '<img src="' + sealDataSrc + '" width="74" height="74" />' : '') +
          '</td>' +
          '<td style="width:64%;text-align:center;font-size:11pt;">Republic of the Philippines<br/>Province of Cavite<br/>MUNICIPALITY OF MARAGONDON</td>' +
          '<td style="width:18%;"></td>' +
          '</tr></table>' +
          '<p style="text-align:center;font-weight:bold;font-size:12pt;margin:16pt 0 14pt;">ABSTRACT OF CANVASS</p>' +
          '<p style="font-size:10.5pt;margin:0 0 14pt;">' +
          escapeHtml(lp.full) +
          '</p>' +
          '<table style="width:100%;border-collapse:collapse;margin-bottom:14pt;"><tr>' +
          '<td style="width:48%;"></td>' +
          '<td style="width:52%;text-align:center;font-size:10pt;">Opened at the Office of the Municipal<br/>Mayor on ' +
          escapeHtml((item.openedDate || '').trim() || '—') +
          '</td></tr></table>' +
          '<table style="width:100%;border-collapse:collapse;font-size:10pt;">' +
          '<tr><th style="text-align:left;font-size:11pt;padding-bottom:8pt;">NAME OF BIDDERS</th><th style="text-align:center;font-size:11pt;padding-bottom:8pt;width:32%;">AMOUNT OF BID</th></tr>' +
          bidderHtml +
          '</table>' +
          '<p style="text-align:center;font-weight:bold;font-size:10.5pt;margin:18pt 0 20pt;">COMMITTEE ON AWARDS</p>' +
          '<p style="text-align:center;margin:14pt 0 18pt;"><b style="font-size:10.5pt;">' +
          escapeHtml(sig.chairmanName.toUpperCase()) +
          '</b><br/><span style="font-size:9.5pt;">' +
          escapeHtml(sig.chairmanTitle.toUpperCase()) +
          '</span></p>' +
          '<p style="text-align:center;margin:12pt 0 18pt;"><b style="font-size:10.5pt;">' +
          escapeHtml(sig.viceChairmanName.toUpperCase()) +
          '</b><br/><span style="font-size:9.5pt;">' +
          escapeHtml(sig.viceChairmanTitle.toUpperCase()) +
          '</span></p>' +
          '<table style="width:100%;border-collapse:collapse;margin:12pt 0 18pt;"><tr>' +
          '<td style="width:50%;text-align:center;"><b style="font-size:10.5pt;">' +
          escapeHtml(sig.member1Name.toUpperCase()) +
          '</b><br/><span style="font-size:9.5pt;">' +
          escapeHtml(sig.member1Title.toUpperCase()) +
          '</span></td>' +
          '<td style="width:50%;text-align:center;"><b style="font-size:10.5pt;">' +
          escapeHtml(sig.member2Name.toUpperCase()) +
          '</b><br/><span style="font-size:9.5pt;">' +
          escapeHtml(sig.member2Title.toUpperCase()) +
          '</span></td></tr></table>' +
          '<p style="text-align:center;margin:12pt 0 20pt;"><b style="font-size:10.5pt;">' +
          escapeHtml(sig.member3Name.toUpperCase()) +
          '</b><br/><span style="font-size:9.5pt;">' +
          escapeHtml(sig.member3Title.toUpperCase()) +
          '</span></p>' +
          '<p style="font-size:10pt;margin:8pt 0 16pt;">Awarded to the lowest bidder, <b>' +
          escapeHtml(wName) +
          '</b>, ' +
          escapeHtml(wLoc) +
          ' same being reasonable and most advantageous to the government.</p>' +
          '<p style="font-size:10pt;margin:8pt 0 0;">' +
          escapeHtml((item.abstractNumber || '').trim() || 'AC –0000-00-00') +
          '</p></div>'
        );
      })
      .join('<br clear="all" style="page-break-before:always" />');

    const htmlContent =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
      '<head><meta charset="utf-8"><style>@page Section1{size:8.5in 14.0in;margin:0.75in 0.8in;} div.Section1{page:Section1;} body{font-family:"Times New Roman",serif;color:#000;}</style></head><body>' +
      htmlPages +
      '</body></html>';
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    triggerDownload(blob, filename + '.doc');
  }

  async function exportCertificateWordDocuments(items, filename, paperSizeOverride) {
    const paperSize = paperSizeOverride || (items[0] && items[0].paperSize) || 'letter';

    if (window.docx) {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        Packer,
        PageBreak,
        PageOrientation,
        Paragraph,
        Table,
        TableCell,
        TableLayoutType,
        TableRow,
        TextRun,
        WidthType,
      } = window.docx;

      const WIDTH_DXA = paperSize === 'a4' ? 11906 : 12240;
      const HEIGHT_DXA =
        paperSize === 'legal' ? 20160 : paperSize === 'a4' ? 16838 : 15840;
      const MARGIN_TOP_DXA = 1440; // 1.00 in
      const MARGIN_BOTTOM_DXA = 1440; // 1.00 in
      const MARGIN_LEFT_DXA = 1800; // 1.25 in
      const MARGIN_RIGHT_DXA = 1800; // 1.25 in
      const CONTENT_WIDTH_DXA = WIDTH_DXA - MARGIN_LEFT_DXA - MARGIN_RIGHT_DXA;
      const halfWidth = Math.floor(CONTENT_WIDTH_DXA / 2);

      const getCertSpacing = (size, hideNoted) => {
        if (size === 'legal') {
          return hideNoted
            ? { g1: 3100, g2: 2700, g3: 6200, g4: 0, g5: 0 }
            : { g1: 2300, g2: 1950, g3: 2700, g4: 2350, g5: 1750 };
        }
        if (size === 'a4') {
          return hideNoted
            ? { g1: 2350, g2: 2050, g3: 4550, g4: 0, g5: 0 }
            : { g1: 1720, g2: 1480, g3: 1980, g4: 1750, g5: 1360 };
        }
        return hideNoted
          ? { g1: 2100, g2: 1800, g3: 4000, g4: 0, g5: 0 }
          : { g1: 1520, g2: 1320, g3: 1740, g4: 1560, g5: 1240 };
      };

      const NO_BORDER_SIDE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
      const NO_CELL_BORDERS = {
        top: NO_BORDER_SIDE,
        bottom: NO_BORDER_SIDE,
        left: NO_BORDER_SIDE,
        right: NO_BORDER_SIDE,
      };
      const NO_TABLE_BORDERS = {
        ...NO_CELL_BORDERS,
        insideHorizontal: NO_BORDER_SIDE,
        insideVertical: NO_BORDER_SIDE,
      };
      const ZERO_CELL_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

      const tnr = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Times New Roman' },
          color: '000000',
          bold: Boolean(opts.bold),
          size: Math.round((opts.sizePt || 12.5) * 2),
        });

      const children = [];

      items.forEach((item, pageIndex) => {
        if (pageIndex > 0) {
          children.push(new Paragraph({ children: [new PageBreak()] }));
        }
        const body = formatCertificateBody(item.deliverySubject, item.autoTrim);
        const hideNoted = shouldHideCertificateNotedBy(
          item.rightSignatoryName,
          item.rightSignatoryPosition,
          item.notedByName
        );
        const sp = getCertSpacing(paperSize, hideNoted);
        const leftName = (item.leftSignatoryName || '').trim() || 'WILMA E. PIEDAD';
        const leftPos =
          (item.leftSignatoryPosition || '').trim() ||
          'Property Custodian/Inspection Officer';
        const rightName =
          (item.rightSignatoryName || '').trim() || 'RIA KRIS O. TIBAYAN';
        const rightPos = (item.rightSignatoryPosition || '').trim() || 'OIC Peso';
        const notedName =
          (item.notedByName || '').trim() || 'HERMINIA M. QUENERI';
        const notedPos =
          (item.notedByPosition || '').trim() || 'Mun. General Services Officer';

        children.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 0, line: 300 },
            children: [tnr('Republic of the Philippines', { sizePt: 12 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 0, line: 300 },
            children: [tnr('Province of Cavite', { sizePt: 12 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 0, line: 300 },
            children: [tnr('MUNICIPALITY OF MARAGONDON', { sizePt: 12 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 40, after: sp.g1, line: 300 },
            children: [tnr('-oOo-', { bold: true, sizePt: 12 })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: sp.g2 },
            children: [
              tnr('CERTIFICATE OF DELIVERY AND ACCEPTANCE', {
                bold: true,
                sizePt: 13.5,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            indent: { firstLine: 720 },
            spacing: { before: 0, after: sp.g3, line: 360 },
            children: [tnr(body.full, { sizePt: 12.5 })],
          }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [halfWidth, CONTENT_WIDTH_DXA - halfWidth],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: halfWidth, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr(leftName, { bold: true, sizePt: 11.5 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr(leftPos, { bold: true, sizePt: 11 })],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: { size: CONTENT_WIDTH_DXA - halfWidth, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_CELL_MARGINS,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr(rightName, { sizePt: 11.5 })],
                      }),
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 0, after: 0, line: 288 },
                        children: [tnr(rightPos, { sizePt: 11 })],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        if (!hideNoted) {
          children.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: sp.g4, after: sp.g5 },
              children: [tnr('Noted by:', { bold: true, sizePt: 11.5 })],
            }),
            new Table({
              width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
              columnWidths: [halfWidth, CONTENT_WIDTH_DXA - halfWidth],
              layout: TableLayoutType.FIXED,
              borders: NO_TABLE_BORDERS,
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      width: { size: halfWidth, type: WidthType.DXA },
                      borders: NO_CELL_BORDERS,
                      margins: ZERO_CELL_MARGINS,
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.CENTER,
                          spacing: { before: 0, after: 0, line: 288 },
                          children: [tnr(notedName, { bold: true, sizePt: 11.5 })],
                        }),
                        new Paragraph({
                          alignment: AlignmentType.CENTER,
                          spacing: { before: 0, after: 0, line: 288 },
                          children: [tnr(notedPos, { bold: true, sizePt: 11 })],
                        }),
                      ],
                    }),
                    new TableCell({
                      width: { size: CONTENT_WIDTH_DXA - halfWidth, type: WidthType.DXA },
                      borders: NO_CELL_BORDERS,
                      margins: ZERO_CELL_MARGINS,
                      children: [
                        new Paragraph({
                          spacing: { before: 0, after: 0 },
                          children: [tnr('')],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
      });

      const doc = new Document({
        styles: {
          default: {
            document: {
              run: {
                font: 'Times New Roman',
                color: '000000',
                size: 25,
              },
            },
          },
        },
        sections: [
          {
            properties: {
              page: {
                size: {
                  width: WIDTH_DXA,
                  height: HEIGHT_DXA,
                  orientation: PageOrientation.PORTRAIT,
                },
                margin: {
                  top: MARGIN_TOP_DXA,
                  bottom: MARGIN_BOTTOM_DXA,
                  left: MARGIN_LEFT_DXA,
                  right: MARGIN_RIGHT_DXA,
                },
              },
            },
            children,
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename + '.docx');
      return;
    }

    const htmlPages = items
      .map((item) => {
        const body = formatCertificateBody(item.deliverySubject, item.autoTrim);
        const hideNoted = shouldHideCertificateNotedBy(
          item.rightSignatoryName,
          item.rightSignatoryPosition,
          item.notedByName
        );
        const leftName = (item.leftSignatoryName || '').trim() || 'WILMA E. PIEDAD';
        const leftPos =
          (item.leftSignatoryPosition || '').trim() ||
          'Property Custodian/Inspection Officer';
        const rightName =
          (item.rightSignatoryName || '').trim() || 'RIA KRIS O. TIBAYAN';
        const rightPos = (item.rightSignatoryPosition || '').trim() || 'OIC Peso';
        const notedName =
          (item.notedByName || '').trim() || 'HERMINIA M. QUENERI';
        const notedPos =
          (item.notedByPosition || '').trim() || 'Mun. General Services Officer';

        return (
          '<div class="Section1">' +
          '<p style="text-align:center;font-size:12pt;margin:0;line-height:1.35;">Republic of the Philippines<br/>Province of Cavite<br/>MUNICIPALITY OF MARAGONDON<br/><b>-oOo-</b></p>' +
          '<p style="text-align:center;font-weight:bold;font-size:13.5pt;margin:56pt 0 52pt;">CERTIFICATE OF DELIVERY AND ACCEPTANCE</p>' +
          '<p style="text-align:justify;text-indent:36pt;font-size:12.5pt;line-height:1.5;margin:0 0 72pt;">' +
          escapeHtml(body.full) +
          '</p>' +
          '<table style="width:100%;border-collapse:collapse;margin-top:24pt;"><tr>' +
          '<td style="width:50%;text-align:center;vertical-align:top;"><b style="font-size:11.5pt;">' +
          escapeHtml(leftName) +
          '</b><br/><b style="font-size:11pt;">' +
          escapeHtml(leftPos) +
          '</b></td>' +
          '<td style="width:50%;text-align:center;vertical-align:top;"><span style="font-size:11.5pt;">' +
          escapeHtml(rightName) +
          '</span><br/><span style="font-size:11pt;">' +
          escapeHtml(rightPos) +
          '</span></td>' +
          '</tr></table>' +
          (hideNoted
            ? ''
            : '<p style="font-weight:bold;font-size:11.5pt;margin:64pt 0 52pt;">Noted by:</p>' +
              '<table style="width:100%;border-collapse:collapse;"><tr>' +
              '<td style="width:50%;text-align:center;"><b style="font-size:11.5pt;">' +
              escapeHtml(notedName) +
              '</b><br/><b style="font-size:11pt;">' +
              escapeHtml(notedPos) +
              '</b></td><td style="width:50%;"></td></tr></table>') +
          '</div>'
        );
      })
      .join('<br clear="all" style="page-break-before:always" />');

    const pageSizeCss =
      paperSize === 'legal'
        ? '8.5in 14.0in'
        : paperSize === 'a4'
        ? '210mm 297mm'
        : '8.5in 11.0in';
    const htmlContent =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
      '<head><meta charset="utf-8"><style>@page Section1{size:' +
      pageSizeCss +
      ';margin:1in 1.25in;} div.Section1{page:Section1;} body{font-family:"Times New Roman",serif;color:#000;}</style></head><body>' +
      htmlPages +
      '</body></html>';
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    triggerDownload(blob, filename + '.doc');
  }

  async function exportRfqWordDocuments(items, filename, paperSizeOverride) {
    const paperSize = paperSizeOverride || (items[0] && items[0].paperSize) || 'legal';

    if (window.docx) {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        Packer,
        PageBreak,
        PageOrientation,
        Paragraph,
        ShadingType,
        Table,
        TableCell,
        TableLayoutType,
        TableRow,
        TextRun,
        UnderlineType,
        VerticalAlign,
        WidthType,
      } = window.docx;
      const HeightRule = window.docx.HeightRule || { ATLEAST: 'atLeast' };

      const WIDTH_DXA = paperSize === 'a4' ? 11906 : 12240;
      const HEIGHT_DXA =
        paperSize === 'legal' ? 20160 : paperSize === 'a4' ? 16838 : 15840;
      const MARGIN_TOP_DXA = 648; // 0.45 in
      const MARGIN_BOTTOM_DXA = 648; // 0.45 in
      const MARGIN_LEFT_DXA = 864; // 0.60 in
      const MARGIN_RIGHT_DXA = 864; // 0.60 in
      const CONTENT_WIDTH_DXA = WIDTH_DXA - MARGIN_LEFT_DXA - MARGIN_RIGHT_DXA;
      const PRINTABLE_HEIGHT_DXA = HEIGHT_DXA - MARGIN_TOP_DXA - MARGIN_BOTTOM_DXA;

      const NO_BORDER_SIDE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
      const THIN_BLACK = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
      const THICK_BLACK = { style: BorderStyle.SINGLE, size: 14, color: '000000' };
      const NO_CELL_BORDERS = {
        top: NO_BORDER_SIDE,
        bottom: NO_BORDER_SIDE,
        left: NO_BORDER_SIDE,
        right: NO_BORDER_SIDE,
      };
      const NO_TABLE_BORDERS = {
        ...NO_CELL_BORDERS,
        insideHorizontal: NO_BORDER_SIDE,
        insideVertical: NO_BORDER_SIDE,
      };
      const ZERO_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

      const cal = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Calibri' },
          color: '000000',
          bold: Boolean(opts.bold),
          size: Math.round((opts.sizePt || 10) * 2),
          underline: opts.underline ? { type: UnderlineType.SINGLE } : undefined,
        });

      const children = [];

      items.forEach((item, pageIndex) => {
        if (pageIndex > 0) {
          children.push(new Paragraph({ children: [new PageBreak()] }));
        }

        const NORMAL_CHROME_DXA = 9600;
        const NORMAL_SAFETY_DXA = 680;
        const normalBudgetDxa = Math.max(
          1800,
          PRINTABLE_HEIGHT_DXA - NORMAL_CHROME_DXA - NORMAL_SAFETY_DXA
        );

        const COMPACT_CHROME_DXA = 8580;
        const COMPACT_SAFETY_DXA = 240;
        const compactBudgetDxa = Math.max(
          2400,
          PRINTABLE_HEIGHT_DXA - COMPACT_CHROME_DXA - COMPACT_SAFETY_DXA
        );

        const sourceItems = Array.isArray(item.items) ? item.items : [];
        const usedNormalDxa = sourceItems.reduce(
          (sum, row) => sum + estimateRfqWrappedLines(row.description, 46) * 220 + 60,
          0
        );

        const padded = structuredClone(sourceItems);
        let isCompressed = false;
        let tableFontPt = 9.5;
        let cellMargins = { top: 24, bottom: 24, left: 80, right: 80 };
        let headerFooterRowHeightDxa = 320;
        let targetRowHeightDxa = 310;
        let rowLineSpacingDxa = 215;

        if (usedNormalDxa <= normalBudgetDxa) {
          const remainingBudget = normalBudgetDxa - usedNormalDxa;
          const blankRowsNeeded = Math.max(0, Math.floor(remainingBudget / 320));
          for (let i = 0; i < blankRowsNeeded; i++) {
            padded.push({
              itemNo: '',
              description: '',
              quantity: '',
              unitCost: '',
              totalAmount: '',
              isCenteredHeader: false,
            });
          }
          const extraLineUnits = sourceItems.reduce(
            (sum, row) => sum + Math.max(0, estimateRfqWrappedLines(row.description, 46) - 1),
            0
          );
          const totalHeightSlots = padded.length + extraLineUnits * 0.65;
          targetRowHeightDxa = Math.max(
            260,
            Math.min(440, Math.floor(normalBudgetDxa / Math.max(1, totalHeightSlots)))
          );
        } else {
          isCompressed = true;
          const denseLines = sourceItems.reduce(
            (sum, row) => sum + estimateRfqWrappedLines(row.description, 54),
            0
          );
          const perLineBudget = Math.floor(
            compactBudgetDxa / Math.max(1, denseLines)
          );
          if (perLineBudget >= 215) {
            tableFontPt = 9;
            cellMargins = { top: 10, bottom: 10, left: 72, right: 72 };
            headerFooterRowHeightDxa = 250;
            rowLineSpacingDxa = 195;
            targetRowHeightDxa = Math.min(255, Math.max(195, perLineBudget));
          } else if (perLineBudget >= 175) {
            tableFontPt = 8.5;
            cellMargins = { top: 4, bottom: 4, left: 64, right: 64 };
            headerFooterRowHeightDxa = 230;
            rowLineSpacingDxa = 180;
            targetRowHeightDxa = Math.max(175, perLineBudget);
          } else {
            tableFontPt = 8;
            cellMargins = { top: 2, bottom: 2, left: 56, right: 56 };
            headerFooterRowHeightDxa = 210;
            rowLineSpacingDxa = 168;
            targetRowHeightDxa = 170;
          }
        }

        children.push(
          new Paragraph({
            spacing: { before: 0, after: 0, line: 220 },
            children: [cal('Standard Form Number : SF-GOOD-80', { sizePt: 10 })],
          }),
          new Paragraph({
            spacing: { before: 0, after: 0, line: 220 },
            children: [cal('Revised on : May 24, 2004', { sizePt: 10 })],
          }),
          new Paragraph({
            spacing: { before: 0, after: 40, line: 220 },
            children: [cal('Standard Form Title : Request For Quotation', { sizePt: 10 })],
          })
        );

        const rightLabelW = 1350;
        const rightLineW = 2100;
        const leftSpacerW = CONTENT_WIDTH_DXA - rightLabelW - rightLineW;
        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [leftSpacerW, rightLabelW, rightLineW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: leftSpacerW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({ width: { size: rightLabelW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 20 }, children: [cal('Date:', { sizePt: 10 })] })] }),
                  new TableCell({ width: { size: rightLineW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, bottom: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 20 }, children: [cal((item.date || '').trim(), { sizePt: 10 })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ width: { size: leftSpacerW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({ width: { size: rightLabelW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 20, after: 20 }, children: [cal('Quotation No.', { sizePt: 10 })] })] }),
                  new TableCell({ width: { size: rightLineW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, bottom: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 20, after: 20 }, children: [cal((item.quotationNo || '').trim(), { sizePt: 10 })] })] }),
                ],
              }),
            ],
          })
        );

        const supplierBoxW = 3600;
        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [supplierBoxW, CONTENT_WIDTH_DXA - supplierBoxW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: supplierBoxW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, bottom: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 10, after: 10 }, children: [cal((item.supplierName || '').trim() || ' ', { sizePt: 10 })] })] }),
                  new TableCell({ width: { size: CONTENT_WIDTH_DXA - supplierBoxW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ width: { size: supplierBoxW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, bottom: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 10, after: 10 }, children: [cal((item.supplierAddress || '').trim() || ' ', { sizePt: 10 })] })] }),
                  new TableCell({ width: { size: CONTENT_WIDTH_DXA - supplierBoxW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                ],
              }),
            ],
          })
        );

        const deadlineDisplay = (item.submissionDeadline || '').trim()
          ? ' ' + item.submissionDeadline.trim() + ' '
          : ' _______________________ ';
        children.push(
          new Paragraph({
            indent: { firstLine: 900 },
            spacing: { before: 100, after: 0, line: 240 },
            children: [
              cal('Please quote your lowest price on the item/s listed below, subject to the General Conditions on the last page, stating the shortest time of delivery and submit your quotation duly signed by your representative not later than', { sizePt: 10 }),
              cal(deadlineDisplay, { sizePt: 10, underline: Boolean((item.submissionDeadline || '').trim()) }),
              cal('in the return envelope attached herewith.', { sizePt: 10 }),
            ],
          }),
          new Paragraph({ spacing: { before: 0, after: 0, line: 230 }, children: [cal('', { sizePt: 10 })] }),
          new Paragraph({ spacing: { before: 0, after: 0, line: 230 }, children: [cal('', { sizePt: 10 })] })
        );

        const sigColW = 3900;
        const sigLeadW = CONTENT_WIDTH_DXA - sigColW;
        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [sigLeadW, sigColW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: sigLeadW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({
                    width: { size: sigColW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_MARGINS,
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 230 }, children: [cal((item.signatoryName || '').trim() || 'NOAH M. CAASI', { bold: true, sizePt: 10.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 230 }, children: [cal((item.signatoryPosition || '').trim() || 'Municipal Administrator', { sizePt: 10 })] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({ spacing: { before: 0, after: 0, line: 230 }, children: [cal('', { sizePt: 10 })] }),
          new Paragraph({ spacing: { before: 0, after: 0, line: 230 }, children: [cal('', { sizePt: 10 })] })
        );

        const noteLabelW = 900;
        const noteBodyW = CONTENT_WIDTH_DXA - noteLabelW;
        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [noteLabelW, noteBodyW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: noteLabelW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [cal('NOTE:', { sizePt: 9.5 })] })] }),
                  new TableCell({
                    width: { size: noteBodyW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: ZERO_MARGINS,
                    children: [
                      new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, children: [cal('1.ALL ENTRIES MUST BE TYPEWRITTEN', { sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, children: [cal('2.DELIVERY PERIOD WITHIN ____30__ CALENDAR DAYS.', { sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, indent: { left: 180, hanging: 180 }, children: [cal('3. WARRANTY SHALL BE FOR A PERIOD OF SIX (6) MONTHS FOR SUPPLIES AND MATERIALS. ONE (1) YEAR FOR EQUIPMENT FROM DATE OF ACCEPTANCE BY THE PROCURING ENTITY.', { sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, children: [cal('4. PRICE VALIDITY SHALL BE FOR A PERIOD OF ___365___ CALENDAR DAYS', { sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, indent: { left: 180, hanging: 180 }, children: [cal('5. G-EPS REGISTRATION CERTIFICATE SHALL BE ATTACHED UPON SUBMISSION OF THE QUOTATION.', { sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: isCompressed ? 50 : 80, line: 210 }, indent: { left: 180, hanging: 180 }, children: [cal('6. BIDDERS SHALL SUBMIT ORIGINAL BROCHURES SHOWING CERTIFICATIONS OF THE PRODUCT BEING OFFERED.', { sizePt: 9.5 })] }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        const colItemNo = Math.round(CONTENT_WIDTH_DXA * 0.095);
        const colQty = Math.round(CONTENT_WIDTH_DXA * 0.125);
        const colUnit = Math.round(CONTENT_WIDTH_DXA * 0.13);
        const colTotal = Math.round(CONTENT_WIDTH_DXA * 0.145);
        const colDesc = CONTENT_WIDTH_DXA - colItemNo - colQty - colUnit - colTotal;
        const colWidths = [colItemNo, colDesc, colQty, colUnit, colTotal];

        const headerTitles = ['ITEM NO.', 'ITEM & DESCRIPTION', 'QUANTITY', 'UNIT COST', 'TOTAL AMOUNT'];
        const headerRow = new TableRow({
          tableHeader: true,
          cantSplit: true,
          height: { value: headerFooterRowHeightDxa, rule: HeightRule.ATLEAST },
          children: headerTitles.map(
            (title, ci) =>
              new TableCell({
                width: { size: colWidths[ci], type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FCE4D6' },
                margins: cellMargins,
                borders: { top: THICK_BLACK, bottom: THICK_BLACK, left: ci === 0 ? THICK_BLACK : THIN_BLACK, right: ci === 4 ? THICK_BLACK : THIN_BLACK },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal(title, { sizePt: tableFontPt })] })],
              })
          ),
        });

        const bodyRows = padded.map(
          (row) =>
            new TableRow({
              cantSplit: true,
              height: { value: targetRowHeightDxa, rule: HeightRule.ATLEAST },
              children: [
                new TableCell({ width: { size: colWidths[0], type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THICK_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal((row.itemNo || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colWidths[1], type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: row.isCenteredHeader ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal((row.description || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colWidths[2], type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal((row.quantity || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colWidths[3], type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal(formatRfqCellNum(row.unitCost), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colWidths[4], type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal(formatRfqCellNum(row.totalAmount), { sizePt: tableFontPt })] })] }),
              ],
            })
        );

        const grandTotStr = formatPlainDecimal(calculateRfqTotal(item.items)) || '0.00';
        const totalRow = new TableRow({
          cantSplit: true,
          height: { value: headerFooterRowHeightDxa, rule: HeightRule.ATLEAST },
          children: [0, 1, 2, 3, 4].map(
            (ci) =>
              new TableCell({
                width: { size: colWidths[ci], type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                margins: cellMargins,
                borders: { top: THICK_BLACK, bottom: THICK_BLACK, left: ci === 0 ? THICK_BLACK : THIN_BLACK, right: ci === 4 ? THICK_BLACK : THIN_BLACK },
                children: [new Paragraph({ alignment: ci === 4 ? AlignmentType.RIGHT : AlignmentType.LEFT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [cal(ci === 4 ? grandTotStr : '', { sizePt: tableFontPt })] })],
              })
          ),
        });

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: colWidths,
            layout: TableLayoutType.FIXED,
            borders: { top: THICK_BLACK, bottom: THICK_BLACK, left: THICK_BLACK, right: THICK_BLACK, insideHorizontal: THIN_BLACK, insideVertical: THIN_BLACK },
            rows: [headerRow, ...bodyRows, totalRow],
          })
        );

        const specLabelW = 2000;
        const specLineW = 3100;
        const specSpacerW = CONTENT_WIDTH_DXA - specLabelW - specLineW;
        const specs = [
          ['Brand and Model  :', (item.brandAndModel || '').trim()],
          ['Delivery Period    :', (item.deliveryPeriod || '').trim()],
          ['Warranty             :', (item.warranty || '').trim()],
          ['Price Validity       :', (item.priceValidity || '').trim()],
        ];
        const footerFontPt = isCompressed ? 9 : 9.5;
        const sigGapDxa = isCompressed ? 140 : 210;

        children.push(
          new Paragraph({ spacing: { before: isCompressed ? 40 : 70, after: 0 }, children: [] }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [specSpacerW, specLabelW, specLineW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: specs.map(
              ([lbl, val]) =>
                new TableRow({
                  children: [
                    new TableCell({ width: { size: specSpacerW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                    new TableCell({ width: { size: specLabelW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: isCompressed ? 4 : 10, after: isCompressed ? 4 : 10 }, children: [cal(lbl, { sizePt: footerFontPt })] })] }),
                    new TableCell({ width: { size: specLineW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, bottom: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: isCompressed ? 4 : 10, after: isCompressed ? 4 : 10 }, children: [cal(val, { sizePt: footerFontPt })] })] }),
                  ],
                })
            ),
          }),
          new Paragraph({
            indent: { firstLine: 360 },
            spacing: { before: isCompressed ? 50 : 80, after: isCompressed ? 110 : 160, line: 215 },
            children: [cal('After having carefully read and accepted your General Conditions. We quote you on the item prices noted above.', { sizePt: footerFontPt })],
          })
        );

        const bSigW = 3900;
        const bLeadW = CONTENT_WIDTH_DXA - bSigW;
        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [bLeadW, bSigW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                children: [
                  new TableCell({ width: { size: bLeadW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({ width: { size: bSigW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, top: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 15, after: sigGapDxa }, children: [cal('Printed Name/Signature', { sizePt: footerFontPt })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ width: { size: bLeadW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({
                    width: { size: bSigW, type: WidthType.DXA },
                    borders: { ...NO_CELL_BORDERS, top: THIN_BLACK },
                    margins: ZERO_MARGINS,
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 15, after: 0 }, children: [cal('Tel. No./Cellphone No.', { sizePt: footerFontPt })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: sigGapDxa }, children: [cal('email address', { sizePt: footerFontPt })] }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ width: { size: bLeadW, type: WidthType.DXA }, borders: NO_CELL_BORDERS, margins: ZERO_MARGINS, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
                  new TableCell({ width: { size: bSigW, type: WidthType.DXA }, borders: { ...NO_CELL_BORDERS, top: THIN_BLACK }, margins: ZERO_MARGINS, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 15, after: 0 }, children: [cal('Date', { sizePt: footerFontPt })] })] }),
                ],
              }),
            ],
          })
        );
      });

      const doc = new Document({
        styles: { default: { document: { run: { font: 'Calibri', color: '000000', size: 20 } } } },
        sections: [
          {
            properties: {
              page: {
                size: { width: WIDTH_DXA, height: HEIGHT_DXA, orientation: PageOrientation.PORTRAIT },
                margin: { top: MARGIN_TOP_DXA, bottom: MARGIN_BOTTOM_DXA, left: MARGIN_LEFT_DXA, right: MARGIN_RIGHT_DXA },
              },
            },
            children,
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename + '.docx');
      return;
    }

    const htmlPages = items.map(buildRfqSheetHtml).join('<br clear="all" style="page-break-before:always" />');
    const pageSizeCss = paperSize === 'legal' ? '8.5in 14.0in' : paperSize === 'a4' ? '210mm 297mm' : '8.5in 11.0in';
    const htmlContent =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
      '<head><meta charset="utf-8"><style>@page Section1{size:' +
      pageSizeCss +
      ';margin:0.45in 0.6in;} body{font-family:Calibri,Arial,sans-serif;color:#000;} table{border-collapse:collapse;}</style></head><body>' +
      htmlPages +
      '</body></html>';
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    triggerDownload(blob, filename + '.doc');
  }

  async function exportPrWordDocuments(items, filename, paperSizeOverride) {
    const paperSize = paperSizeOverride || (items[0] && items[0].paperSize) || 'legal';
    const isLegal = paperSize === 'legal';
    const isA4 = paperSize === 'a4';
    const WIDTH_DXA = isA4 ? 11906 : 12240;
    const HEIGHT_DXA = isLegal ? 20160 : isA4 ? 16838 : 15840;
    const MARGIN_TOP_DXA = 648;
    const MARGIN_BOTTOM_DXA = 648;
    const MARGIN_LEFT_DXA = 792;
    const MARGIN_RIGHT_DXA = 792;
    const CONTENT_WIDTH_DXA = WIDTH_DXA - MARGIN_LEFT_DXA - MARGIN_RIGHT_DXA;
    const PRINTABLE_HEIGHT_DXA = HEIGHT_DXA - MARGIN_TOP_DXA - MARGIN_BOTTOM_DXA;

    const sealPng = await rasterizeSealToPng();

    if (window.docx) {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        HeightRule,
        ImageRun,
        Packer,
        PageBreak,
        PageOrientation,
        Paragraph,
        ShadingType,
        Table,
        TableCell,
        TableLayoutType,
        TableRow,
        TextRun,
        VerticalAlign,
        WidthType,
      } = window.docx;

      const NO_BORDER_SIDE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
      const THIN_BLACK = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
      const MED_BLACK = { style: BorderStyle.SINGLE, size: 10, color: '000000' };
      const THICK_BLACK = { style: BorderStyle.SINGLE, size: 14, color: '000000' };
      const NO_CELL_BORDERS = { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: NO_BORDER_SIDE, right: NO_BORDER_SIDE };
      const NO_TABLE_BORDERS = { ...NO_CELL_BORDERS, insideHorizontal: NO_BORDER_SIDE, insideVertical: NO_BORDER_SIDE };
      const ZERO_MARGINS = { top: 0, bottom: 0, left: 0, right: 0 };

      const tnr = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Times New Roman' },
          color: '000000',
          bold: Boolean(opts.bold),
          italics: Boolean(opts.italic),
          size: Math.round((opts.sizePt || 10) * 2),
        });
      const cal = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Calibri' },
          color: '000000',
          bold: Boolean(opts.bold),
          size: Math.round((opts.sizePt || 9.5) * 2),
        });

      const children = [];

      items.forEach((item, pageIndex) => {
        if (pageIndex > 0) {
          children.push(new Paragraph({ children: [new PageBreak()] }));
        }

        const NORMAL_CHROME_DXA = 8200;
        const NORMAL_SAFETY_DXA = 650;
        const normalBudgetDxa = Math.max(2400, PRINTABLE_HEIGHT_DXA - NORMAL_CHROME_DXA - NORMAL_SAFETY_DXA);
        const COMPACT_CHROME_DXA = 6700;
        const COMPACT_SAFETY_DXA = 250;
        const compactBudgetDxa = Math.max(3200, PRINTABLE_HEIGHT_DXA - COMPACT_CHROME_DXA - COMPACT_SAFETY_DXA);

        const sourceItems = Array.isArray(item.items) ? item.items : [];
        const usedNormalDxa = sourceItems.reduce(
          (sum, row) => sum + estimatePrWrappedLines(row.description, 42) * 235 + 75,
          0
        );

        const padded = structuredClone(sourceItems);
        let isCompressed = false;
        let tableFontPt = 10;
        let cellMargins = { top: 28, bottom: 28, left: 72, right: 72 };
        let headerRowHeightDxa = 420;
        let totalRowHeightDxa = 330;
        let targetRowHeightDxa = 320;
        let rowLineSpacingDxa = 220;

        if (usedNormalDxa <= normalBudgetDxa) {
          const remainingBudget = normalBudgetDxa - usedNormalDxa;
          const blankRowsNeeded = Math.max(0, Math.floor(remainingBudget / 335));
          for (let i = 0; i < blankRowsNeeded; i++) {
            padded.push({ itemNo: '', unit: '', description: '', quantity: '', unitCost: '', totalCost: '' });
          }
          const extraLineUnits = sourceItems.reduce(
            (sum, row) => sum + Math.max(0, estimatePrWrappedLines(row.description, 42) - 1),
            0
          );
          const totalHeightSlots = padded.length + extraLineUnits * 0.65;
          targetRowHeightDxa = Math.max(270, Math.min(430, Math.floor(normalBudgetDxa / Math.max(1, totalHeightSlots))));
        } else {
          isCompressed = true;
          const denseLines = sourceItems.reduce(
            (sum, row) => sum + estimatePrWrappedLines(row.description, 48),
            0
          );
          const perLineBudget = Math.floor(compactBudgetDxa / Math.max(1, denseLines));
          if (perLineBudget >= 230) {
            tableFontPt = 9;
            cellMargins = { top: 12, bottom: 12, left: 64, right: 64 };
            headerRowHeightDxa = 320;
            totalRowHeightDxa = 270;
            rowLineSpacingDxa = 200;
            targetRowHeightDxa = Math.min(265, Math.max(205, perLineBudget));
          } else if (perLineBudget >= 185) {
            tableFontPt = 8.5;
            cellMargins = { top: 6, bottom: 6, left: 56, right: 56 };
            headerRowHeightDxa = 280;
            totalRowHeightDxa = 240;
            rowLineSpacingDxa = 185;
            targetRowHeightDxa = Math.max(185, perLineBudget);
          } else {
            tableFontPt = 8;
            cellMargins = { top: 2, bottom: 2, left: 48, right: 48 };
            headerRowHeightDxa = 250;
            totalRowHeightDxa = 220;
            rowLineSpacingDxa = 170;
            targetRowHeightDxa = 175;
          }
        }

        children.push(
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { before: 0, after: 20, line: 200 },
            children: [tnr('Appendix 47', { italic: true, sizePt: 9.5 })],
          })
        );

        const colItemNo = Math.round(CONTENT_WIDTH_DXA * 0.13);
        const colUnit = Math.round(CONTENT_WIDTH_DXA * 0.08);
        const colDescLeft = Math.round(CONTENT_WIDTH_DXA * 0.19);
        const colDescRight = Math.round(CONTENT_WIDTH_DXA * 0.27);
        const colQty = Math.round(CONTENT_WIDTH_DXA * 0.09);
        const colUnitCost = Math.round(CONTENT_WIDTH_DXA * 0.115);
        const colTotalCost = CONTENT_WIDTH_DXA - colItemNo - colUnit - colDescLeft - colDescRight - colQty - colUnitCost;
        const colWidths = [colItemNo, colUnit, colDescLeft, colDescRight, colQty, colUnitCost, colTotalCost];
        const leftMetaW = colItemNo + colUnit;
        const midMetaW = colDescLeft + colDescRight;
        const rightMetaW = colQty + colUnitCost + colTotalCost;

        const sealColW = 1440;
        const sideSpacerW = 1440;
        const innerHeaderW = CONTENT_WIDTH_DXA - 160;
        const titleColW = innerHeaderW - sealColW - sideSpacerW;
        const headerInnerTable = new Table({
          width: { size: innerHeaderW, type: WidthType.DXA },
          columnWidths: [sealColW, titleColW, sideSpacerW],
          layout: TableLayoutType.FIXED,
          borders: NO_TABLE_BORDERS,
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: sealColW, type: WidthType.DXA },
                  borders: NO_CELL_BORDERS,
                  margins: ZERO_MARGINS,
                  verticalAlign: VerticalAlign.CENTER,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      spacing: { before: 0, after: 0 },
                      children: sealPng
                        ? [
                            new ImageRun({
                              type: 'png',
                              data: sealPng,
                              transformation: { width: 68, height: 68 },
                              altText: { title: 'Municipality of Maragondon Seal', description: 'Official Seal', name: 'MaragondonSeal' },
                            }),
                          ]
                        : [tnr('')],
                    }),
                  ],
                }),
                new TableCell({
                  width: { size: titleColW, type: WidthType.DXA },
                  borders: NO_CELL_BORDERS,
                  margins: ZERO_MARGINS,
                  verticalAlign: VerticalAlign.CENTER,
                  children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 20, line: 280 }, children: [cal('PURCHASE REQUEST', { bold: true, sizePt: 14 })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [tnr('Republic of the Philippines', { sizePt: 9.5 })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [cal('MUNICIPAL GOVERNMENT OF MARAGONDON', { sizePt: 9 })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [cal('MARAGONDON CAVITE', { sizePt: 9 })] }),
                  ],
                }),
                new TableCell({
                  width: { size: sideSpacerW, type: WidthType.DXA },
                  borders: NO_CELL_BORDERS,
                  margins: ZERO_MARGINS,
                  children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })],
                }),
              ],
            }),
          ],
        });

        const topTitleRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              columnSpan: 7,
              width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
              verticalAlign: VerticalAlign.CENTER,
              margins: { top: 80, bottom: 20, left: 80, right: 80 },
              borders: { top: THICK_BLACK, bottom: NO_BORDER_SIDE, left: THICK_BLACK, right: THICK_BLACK },
              children: [headerInnerTable],
            }),
          ],
        });

        const topFundRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              columnSpan: 4,
              width: { size: leftMetaW + midMetaW, type: WidthType.DXA },
              margins: { top: 0, bottom: 36, left: 72, right: 40 },
              borders: { top: NO_BORDER_SIDE, bottom: MED_BLACK, left: THICK_BLACK, right: NO_BORDER_SIDE },
              children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })],
            }),
            new TableCell({
              columnSpan: 3,
              width: { size: rightMetaW, type: WidthType.DXA },
              verticalAlign: VerticalAlign.BOTTOM,
              margins: { top: 0, bottom: 36, left: 72, right: 72 },
              borders: { top: NO_BORDER_SIDE, bottom: MED_BLACK, left: NO_BORDER_SIDE, right: THICK_BLACK },
              children: [new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, children: [cal('FUND: ' + (item.fund || '').trim(), { sizePt: 9.5 })] })],
            }),
          ],
        });

        const metaPad = { top: 36, bottom: 36, left: 72, right: 72 };
        const metaRow1 = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({ columnSpan: 2, width: { size: leftMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: MED_BLACK, bottom: THIN_BLACK, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('DEPARTMENT: ' + (item.department || '').trim(), { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 2, width: { size: midMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: MED_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('PR NO.: ' + (item.prNo || '').trim(), { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 3, width: { size: rightMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: MED_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('DATE: ' + (item.prDate || '').trim(), { sizePt: 9.5 })] })] }),
          ],
        });
        const metaRow2 = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({ columnSpan: 2, width: { size: leftMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: THIN_BLACK, bottom: MED_BLACK, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('SECTION: ' + (item.section || '').trim(), { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 2, width: { size: midMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: THIN_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('FPP: ' + (item.fpp || '').trim(), { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 3, width: { size: rightMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: metaPad, borders: { top: THIN_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('DATE: ' + (item.sectionDate || '').trim(), { sizePt: 9.5 })] })] }),
          ],
        });

        const itemHeaderRow = new TableRow({
          tableHeader: true,
          cantSplit: true,
          height: { value: headerRowHeightDxa, rule: HeightRule.ATLEAST },
          children: [
            { title: 'Item No.', span: 1, w: colItemNo, lt: true, rt: false },
            { title: 'Unit', span: 1, w: colUnit, lt: false, rt: false },
            { title: 'Item Description', span: 2, w: midMetaW, lt: false, rt: false },
            { title: 'Quantity', span: 1, w: colQty, lt: false, rt: false },
            { title: 'Unit Cost', span: 1, w: colUnitCost, lt: false, rt: false },
            { title: 'Total Cost', span: 1, w: colTotalCost, lt: false, rt: true },
          ].map(
            (c) =>
              new TableCell({
                columnSpan: c.span,
                width: { size: c.w, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FFE699' },
                margins: cellMargins,
                borders: { top: MED_BLACK, bottom: MED_BLACK, left: c.lt ? THICK_BLACK : MED_BLACK, right: c.rt ? THICK_BLACK : MED_BLACK },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(c.title, { bold: true, sizePt: Math.min(10, tableFontPt) })] })],
              })
          ),
        });

        const itemBodyRows = padded.map(
          (row) =>
            new TableRow({
              cantSplit: true,
              height: { value: targetRowHeightDxa, rule: HeightRule.ATLEAST },
              children: [
                new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.itemNo || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colUnit, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.unit || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ columnSpan: 2, width: { size: midMetaW, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.description || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colQty, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.quantity || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colUnitCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(formatRfqCellNum(row.unitCost), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colTotalCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(formatRfqCellNum(row.totalCost), { sizePt: tableFontPt })] })] }),
              ],
            })
        );

        const grandTotStr = formatPlainDecimal(calculatePrTotal(item.items)) || '0.00';
        const totalRow = new TableRow({
          cantSplit: true,
          height: { value: totalRowHeightDxa, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({ columnSpan: 6, width: { size: CONTENT_WIDTH_DXA - colTotalCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: MED_BLACK, bottom: MED_BLACK, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr('TOTAL', { sizePt: tableFontPt })] })] }),
            new TableCell({ width: { size: colTotalCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(grandTotStr, { bold: true, sizePt: tableFontPt })] })] }),
          ],
        });

        const purposeRow = new TableRow({
          cantSplit: true,
          height: { value: isCompressed ? 900 : 1400, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 60, bottom: 60, left: 72, right: 40 }, borders: { top: MED_BLACK, bottom: MED_BLACK, left: THICK_BLACK, right: NO_BORDER_SIDE }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 230 }, children: [cal('Purpose :', { sizePt: 10 })] })] }),
            new TableCell({ columnSpan: 6, width: { size: CONTENT_WIDTH_DXA - colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 60, bottom: 60, left: 60, right: 80 }, borders: { top: MED_BLACK, bottom: MED_BLACK, left: NO_BORDER_SIDE, right: THICK_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: isCompressed ? 225 : 260 }, children: [tnr((item.purpose || '').trim() || ' ', { sizePt: isCompressed ? 9.5 : 10 })] })] }),
          ],
        });

        const appRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              columnSpan: 7,
              width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
              verticalAlign: VerticalAlign.TOP,
              margins: { top: isCompressed ? 60 : 100, bottom: isCompressed ? 60 : 100, left: 80, right: 80 },
              borders: { top: MED_BLACK, bottom: MED_BLACK, left: THICK_BLACK, right: THICK_BLACK },
              children: [
                new Paragraph({ indent: { left: colItemNo }, spacing: { before: 0, after: isCompressed ? 110 : 220, line: 220 }, children: [cal('I hereby certify that all items were included in the Annual Procurement Plan (APP)', { sizePt: 9.5 })] }),
                new Paragraph({ indent: { left: colItemNo + colUnit + Math.round(colDescLeft * 0.72) }, spacing: { before: 0, after: isCompressed ? 160 : 320, line: 220 }, children: [cal('Certified by:', { sizePt: 9.5 })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, indent: { left: colItemNo }, spacing: { before: 0, after: 0, line: 220 }, children: [cal((item.certifiedByName || '').trim() || 'NOAH M. CAASI', { bold: true, sizePt: 10 })] }),
                new Paragraph({ alignment: AlignmentType.CENTER, indent: { left: colItemNo }, spacing: { before: 0, after: 0, line: 220 }, children: [tnr((item.certifiedByPosition || '').trim() || 'BAC Secretary', { sizePt: 9.5 })] }),
              ],
            }),
          ],
        });

        const sigCol1W = colUnit + colDescLeft;
        const sigCol2W = colDescRight;
        const sigCol3W = colQty + colUnitCost + colTotalCost;

        const sigHeaderRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, margins: { top: 40, bottom: 20, left: 72, right: 40 }, borders: { top: MED_BLACK, bottom: NO_BORDER_SIDE, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
            new TableCell({ columnSpan: 2, width: { size: sigCol1W, type: WidthType.DXA }, margins: { top: 40, bottom: 20, left: 60, right: 60 }, borders: { top: MED_BLACK, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [tnr((item.requestedByLabel || '').trim() || 'Requested by:', { sizePt: 9.5 })] })] }),
            new TableCell({ width: { size: sigCol2W, type: WidthType.DXA }, margins: { top: 40, bottom: 20, left: 60, right: 60 }, borders: { top: MED_BLACK, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [tnr((item.cashAvailLabel || '').trim() || 'Cash Availability:', { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 3, width: { size: sigCol3W, type: WidthType.DXA }, margins: { top: 40, bottom: 20, left: 60, right: 60 }, borders: { top: MED_BLACK, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 220 }, children: [tnr((item.approvedByLabel || '').trim() || 'Approved by:', { sizePt: 9.5 })] })] }),
          ],
        });

        const sigSpaceRow = new TableRow({
          cantSplit: true,
          height: { value: isCompressed ? 240 : 360, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.BOTTOM, margins: { top: 20, bottom: 20, left: 72, right: 40 }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 210 }, children: [cal('Signature :', { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 2, width: { size: sigCol1W, type: WidthType.DXA }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
            new TableCell({ width: { size: sigCol2W, type: WidthType.DXA }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
            new TableCell({ columnSpan: 3, width: { size: sigCol3W, type: WidthType.DXA }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [] })] }),
          ],
        });

        const printedNameRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { top: 20, bottom: 20, left: 72, right: 30 }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('Printed Name :', { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 2, width: { size: sigCol1W, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { top: 20, bottom: 20, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.requestedByName || '').trim() || 'HERMINIA M. QUENERI', { bold: true, sizePt: 9.5 })] })] }),
            new TableCell({ width: { size: sigCol2W, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { top: 20, bottom: 20, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.cashAvailName || '').trim() || 'JOVITA A. NOVELO', { bold: true, sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 3, width: { size: sigCol3W, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: { top: 20, bottom: 20, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.approvedByName || '').trim() || 'HON. LAWRENCE N. ARCA', { bold: true, sizePt: 9.5 })] })] }),
          ],
        });

        const designationRow = new TableRow({
          cantSplit: true,
          children: [
            new TableCell({ width: { size: colItemNo, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 20, bottom: 80, left: 72, right: 30 }, borders: { top: NO_BORDER_SIDE, bottom: THICK_BLACK, left: THICK_BLACK, right: MED_BLACK }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [cal('Designation :', { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 2, width: { size: sigCol1W, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 20, bottom: 80, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: THICK_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.requestedByDesignation || '').trim() || 'Municipal GSO', { sizePt: 9.5 })] })] }),
            new TableCell({ width: { size: sigCol2W, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 20, bottom: 80, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: THICK_BLACK, left: MED_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.cashAvailDesignation || '').trim() || 'Acting Mun. Treasurer', { sizePt: 9.5 })] })] }),
            new TableCell({ columnSpan: 3, width: { size: sigCol3W, type: WidthType.DXA }, verticalAlign: VerticalAlign.TOP, margins: { top: 20, bottom: 80, left: 50, right: 50 }, borders: { top: NO_BORDER_SIDE, bottom: THICK_BLACK, left: MED_BLACK, right: THICK_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 215 }, children: [tnr((item.approvedByDesignation || '').trim() || 'Municipal Mayor', { sizePt: 9.5 })] })] }),
          ],
        });

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: colWidths,
            layout: TableLayoutType.FIXED,
            borders: { top: THICK_BLACK, bottom: THICK_BLACK, left: THICK_BLACK, right: THICK_BLACK, insideHorizontal: THIN_BLACK, insideVertical: MED_BLACK },
            rows: [topTitleRow, topFundRow, metaRow1, metaRow2, itemHeaderRow, ...itemBodyRows, totalRow, purposeRow, appRow, sigHeaderRow, sigSpaceRow, printedNameRow, designationRow],
          })
        );
      });

      const doc = new Document({
        styles: { default: { document: { run: { font: 'Times New Roman', color: '000000', size: 20 } } } },
        sections: [
          {
            properties: {
              page: {
                size: { width: WIDTH_DXA, height: HEIGHT_DXA, orientation: PageOrientation.PORTRAIT },
                margin: { top: MARGIN_TOP_DXA, bottom: MARGIN_BOTTOM_DXA, left: MARGIN_LEFT_DXA, right: MARGIN_RIGHT_DXA },
              },
            },
            children,
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename + '.docx');
      return;
    }

    const htmlPages = items.map(buildPrSheetHtml).join('<br clear="all" style="page-break-before:always" />');
    const pageSizeCss = paperSize === 'legal' ? '8.5in 14.0in' : paperSize === 'a4' ? '210mm 297mm' : '8.5in 11.0in';
    const htmlContent =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
      '<head><meta charset="utf-8"><style>@page Section1{size:' +
      pageSizeCss +
      ';margin:0.45in 0.55in;} body{font-family:"Times New Roman",serif;color:#000;} table{border-collapse:collapse;}</style></head><body>' +
      htmlPages +
      '</body></html>';
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    triggerDownload(blob, filename + '.doc');
  }

  async function exportPoWordDocuments(items, filename, paperSizeOverride) {
    const paperSize = paperSizeOverride || (items[0] && items[0].paperSize) || 'a4';

    if (window.docx) {
      const {
        AlignmentType,
        BorderStyle,
        Document,
        Packer,
        PageBreak,
        PageOrientation,
        Paragraph,
        ShadingType,
        Table,
        TableCell,
        TableLayoutType,
        TableRow,
        TextRun,
        VerticalAlign,
        WidthType,
      } = window.docx;
      const HeightRule = window.docx.HeightRule || { ATLEAST: 'atLeast' };

      const WIDTH_DXA = paperSize === 'a4' ? 11906 : 12240;
      const HEIGHT_DXA = paperSize === 'legal' ? 20160 : paperSize === 'a4' ? 16838 : 15840;
      const MARGIN_TOP_DXA = 576;
      const MARGIN_BOTTOM_DXA = 576;
      const MARGIN_LEFT_DXA = 648;
      const MARGIN_RIGHT_DXA = 648;
      const CONTENT_WIDTH_DXA = WIDTH_DXA - MARGIN_LEFT_DXA - MARGIN_RIGHT_DXA;
      const PRINTABLE_HEIGHT_DXA = HEIGHT_DXA - MARGIN_TOP_DXA - MARGIN_BOTTOM_DXA;

      const NO_BORDER_SIDE = { style: BorderStyle.NONE, size: 0, color: 'auto' };
      const THIN_BLACK = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
      const MED_BLACK = { style: BorderStyle.SINGLE, size: 12, color: '000000' };
      const NO_CELL_BORDERS = { top: NO_BORDER_SIDE, bottom: NO_BORDER_SIDE, left: NO_BORDER_SIDE, right: NO_BORDER_SIDE };
      const NO_TABLE_BORDERS = { ...NO_CELL_BORDERS, insideHorizontal: NO_BORDER_SIDE, insideVertical: NO_BORDER_SIDE };

      const tnr = (text, opts = {}) =>
        new TextRun({
          text,
          font: { name: 'Times New Roman' },
          color: '000000',
          bold: Boolean(opts.bold),
          italics: Boolean(opts.italic),
          underline: opts.underline ? {} : undefined,
          size: Math.round((opts.sizePt || 10) * 2),
        });

      const children = [];

      items.forEach((item, pageIndex) => {
        if (pageIndex > 0) {
          children.push(new Paragraph({ children: [new PageBreak()] }));
        }

        const NORMAL_CHROME_DXA = 9150;
        const NORMAL_SAFETY_DXA = 550;
        const normalBudgetDxa = Math.max(2200, PRINTABLE_HEIGHT_DXA - NORMAL_CHROME_DXA - NORMAL_SAFETY_DXA);
        const COMPACT_CHROME_DXA = 7650;
        const COMPACT_SAFETY_DXA = 250;
        const compactBudgetDxa = Math.max(3000, PRINTABLE_HEIGHT_DXA - COMPACT_CHROME_DXA - COMPACT_SAFETY_DXA);

        const sourceItems = Array.isArray(item.items) ? item.items : [];
        const usedNormalDxa = sourceItems.reduce(
          (sum, row) => sum + estimatePoWrappedLines(row.description, 40) * 230 + 65,
          0
        );

        const padded = structuredClone(sourceItems);
        let isCompressed = false;
        let tableFontPt = 10;
        let cellMargins = { top: 24, bottom: 24, left: 64, right: 64 };
        let headerRowHeightDxa = 440;
        let totalRowHeightDxa = 340;
        let targetRowHeightDxa = 310;
        let rowLineSpacingDxa = 215;

        if (usedNormalDxa <= normalBudgetDxa) {
          const remainingBudget = normalBudgetDxa - usedNormalDxa;
          const blankRowsNeeded = Math.max(0, Math.floor(remainingBudget / 320));
          for (let i = 0; i < blankRowsNeeded; i++) {
            padded.push({ stockNo: '', unit: '', description: '', quantity: '', unitCost: '', amount: '', isCenteredHeader: false });
          }
          const extraLineUnits = sourceItems.reduce((sum, row) => sum + Math.max(0, estimatePoWrappedLines(row.description, 40) - 1), 0);
          const totalHeightSlots = padded.length + extraLineUnits * 0.65;
          targetRowHeightDxa = Math.max(260, Math.min(410, Math.floor(normalBudgetDxa / Math.max(1, totalHeightSlots))));
        } else {
          isCompressed = true;
          const denseLines = sourceItems.reduce((sum, row) => sum + estimatePoWrappedLines(row.description, 46), 0);
          const perLineBudget = Math.floor(compactBudgetDxa / Math.max(1, denseLines));
          if (perLineBudget >= 225) {
            tableFontPt = 9;
            cellMargins = { top: 10, bottom: 10, left: 56, right: 56 };
            headerRowHeightDxa = 340;
            totalRowHeightDxa = 270;
            rowLineSpacingDxa = 195;
            targetRowHeightDxa = Math.min(255, Math.max(200, perLineBudget));
          } else if (perLineBudget >= 180) {
            tableFontPt = 8.5;
            cellMargins = { top: 5, bottom: 5, left: 48, right: 48 };
            headerRowHeightDxa = 300;
            totalRowHeightDxa = 240;
            rowLineSpacingDxa = 180;
            targetRowHeightDxa = Math.max(180, perLineBudget);
          } else {
            tableFontPt = 8;
            cellMargins = { top: 2, bottom: 2, left: 42, right: 42 };
            headerRowHeightDxa = 270;
            totalRowHeightDxa = 220;
            rowLineSpacingDxa = 168;
            targetRowHeightDxa = 172;
          }
        }

        children.push(
          new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 20, line: 200 }, children: [tnr('Appendix 49', { italic: true, sizePt: 9.5 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 10, line: 240 }, children: [tnr('PURCHASE ORDER', { bold: true, sizePt: 11.5 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 10, line: 220 }, children: [tnr('MUNICIPALITY OF MARAGONDON', { sizePt: 10 })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 80, line: 220 }, children: [tnr('LGU', { bold: true, sizePt: 10 })] })
        );

        const colStock = Math.round(CONTENT_WIDTH_DXA * 0.11);
        const colUnit = Math.round(CONTENT_WIDTH_DXA * 0.08);
        const colDesc = Math.round(CONTENT_WIDTH_DXA * 0.41);
        const colQty = Math.round(CONTENT_WIDTH_DXA * 0.13);
        const colUnitCost = Math.round(CONTENT_WIDTH_DXA * 0.13);
        const colAmount = CONTENT_WIDTH_DXA - colStock - colUnit - colDesc - colQty - colUnitCost;
        const leftHalfW = colStock + colUnit + colDesc;
        const rightHalfW = colQty + colUnitCost + colAmount;

        const supplierVal = (item.supplier || '').trim() || "MAHARLIKA'S RESTAURANT";
        const addressVal = (item.address || '').trim();
        const tinVal = (item.tin || '').trim();
        const poNoVal = (item.poNo || '').trim();
        const poDateVal = (item.poDate || '').trim();
        const modeVal = (item.modeOfProcurement || '').trim();
        const prNosVal = (item.prNos || '').trim();

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [leftHalfW, rightHalfW],
            layout: TableLayoutType.FIXED,
            borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK, insideHorizontal: NO_BORDER_SIDE, insideVertical: MED_BLACK },
            rows: [
              new TableRow({
                cantSplit: true,
                children: [
                  new TableCell({
                    width: { size: leftHalfW, type: WidthType.DXA },
                    margins: { top: 45, bottom: 45, left: 72, right: 72 },
                    borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: 30, line: 220 }, children: [tnr('Supplier :   ', { bold: true, sizePt: 9.5 }), tnr(supplierVal, { bold: true, underline: true, sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 30, line: 220 }, children: [tnr('Address :    ', { bold: true, sizePt: 9.5 }), tnr(addressVal || '___________________________', { underline: Boolean(addressVal), sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 30, line: 160 }, children: [tnr('')] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 220 }, children: [tnr('TIN :           ', { bold: true, sizePt: 9.5 }), tnr(tinVal, { sizePt: 9.5 })] }),
                    ],
                  }),
                  new TableCell({
                    width: { size: rightHalfW, type: WidthType.DXA },
                    margins: { top: 45, bottom: 45, left: 72, right: 72 },
                    borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: 30, line: 220 }, children: [tnr('P.O. No. :   ', { bold: true, sizePt: 9.5 }), tnr(poNoVal || '_______________________', { bold: Boolean(poNoVal), underline: Boolean(poNoVal), sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 30, line: 220 }, children: [tnr('Date:          ', { bold: true, sizePt: 9.5 }), tnr(poDateVal || '_______________________', { underline: Boolean(poDateVal), sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 30, line: 220 }, children: [tnr('Mode of Procurement : ', { bold: true, sizePt: 9.5 }), tnr(modeVal, { bold: true, sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 220 }, children: [tnr('PR No./s           ', { bold: true, sizePt: 9.5 }), tnr(prNosVal, { bold: true, sizePt: 9.5 })] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({ spacing: { before: 50, after: 15, line: 215 }, children: [tnr('Gentlemen:', { sizePt: 9.5 })] }),
          new Paragraph({ indent: { left: colStock }, spacing: { before: 0, after: 60, line: 215 }, children: [tnr('Please furnish this Office the following articles subject to the terms and conditions contained herein:', { sizePt: 9.5 })] }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [leftHalfW, rightHalfW],
            layout: TableLayoutType.FIXED,
            borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK, insideHorizontal: NO_BORDER_SIDE, insideVertical: MED_BLACK },
            rows: [
              new TableRow({
                cantSplit: true,
                children: [
                  new TableCell({
                    width: { size: leftHalfW, type: WidthType.DXA },
                    margins: { top: 40, bottom: 40, left: 72, right: 72 },
                    borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: 25, line: 215 }, children: [tnr('Place of Delivery  ', { bold: true, sizePt: 9.5 }), tnr((item.placeOfDelivery || '').trim(), { bold: true, sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [tnr('Date of Delivery :  ', { bold: true, sizePt: 9.5 }), tnr((item.dateOfDelivery || '').trim() || '___________________________________', { underline: Boolean((item.dateOfDelivery || '').trim()), sizePt: 9.5 })] }),
                    ],
                  }),
                  new TableCell({
                    width: { size: rightHalfW, type: WidthType.DXA },
                    margins: { top: 40, bottom: 40, left: 72, right: 72 },
                    borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: 25, line: 215 }, children: [tnr('Delivery Term :   ', { bold: true, sizePt: 9.5 }), tnr((item.deliveryTerm || '').trim(), { bold: true, sizePt: 9.5 })] }),
                      new Paragraph({ spacing: { before: 0, after: 0, line: 215 }, children: [tnr('Payment Term :  ', { bold: true, sizePt: 9.5 }), tnr((item.paymentTerm || '').trim(), { bold: true, sizePt: 9.5 })] }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );

        const itemHeaderRow = new TableRow({
          tableHeader: true,
          cantSplit: true,
          height: { value: headerRowHeightDxa, rule: HeightRule.ATLEAST },
          children: [
            { lines: ['Stock/ Property', 'No.'], w: colStock, lt: true, rt: false },
            { lines: ['Unit'], w: colUnit, lt: false, rt: false },
            { lines: ['Description'], w: colDesc, lt: false, rt: true },
            { lines: ['Quantity'], w: colQty, lt: true, rt: false },
            { lines: ['Unit Cost'], w: colUnitCost, lt: false, rt: false },
            { lines: ['Amount'], w: colAmount, lt: false, rt: true },
          ].map(
            (c) =>
              new TableCell({
                width: { size: c.w, type: WidthType.DXA },
                verticalAlign: VerticalAlign.CENTER,
                shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FCE4D6' },
                margins: cellMargins,
                borders: { top: NO_BORDER_SIDE, bottom: MED_BLACK, left: c.lt ? MED_BLACK : THIN_BLACK, right: c.rt ? MED_BLACK : THIN_BLACK },
                children: c.lines.map((ln) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(ln, { bold: true, sizePt: Math.min(10, tableFontPt) })] })),
              })
          ),
        });

        const itemBodyRows = padded.map(
          (row) =>
            new TableRow({
              cantSplit: true,
              height: { value: targetRowHeightDxa, rule: HeightRule.ATLEAST },
              children: [
                new TableCell({ width: { size: colStock, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.stockNo || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colUnit, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.unit || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colDesc, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr((row.description || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colQty, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: MED_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(row.isCenteredHeader ? '' : (row.quantity || '').trim(), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colUnitCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: THIN_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(row.isCenteredHeader ? '' : formatRfqCellNum(row.unitCost), { sizePt: tableFontPt })] })] }),
                new TableCell({ width: { size: colAmount, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: THIN_BLACK, bottom: THIN_BLACK, left: THIN_BLACK, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(row.isCenteredHeader ? '' : formatRfqCellNum(row.amount), { sizePt: tableFontPt })] })] }),
              ],
            })
        );

        const grandTotal = calculatePoTotal(item.items);
        const grandTotalFormatted = formatPlainDecimal(grandTotal) || '0.00';
        const resolvedWords = item.autoAmountInWords
          ? numberToPesosWords(grandTotal)
          : (item.amountInWords || '').trim() || numberToPesosWords(grandTotal);

        const totalRow = new TableRow({
          cantSplit: true,
          height: { value: totalRowHeightDxa, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({ columnSpan: 2, width: { size: colStock + colUnit, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: MED_BLACK, bottom: MED_BLACK, left: MED_BLACK, right: NO_BORDER_SIDE }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr('Total-amount in Words)', { bold: true, sizePt: tableFontPt })] })] }),
            new TableCell({ columnSpan: 3, width: { size: colDesc + colQty + colUnitCost, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: MED_BLACK, bottom: MED_BLACK, left: NO_BORDER_SIDE, right: NO_BORDER_SIDE }, children: [new Paragraph({ spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(resolvedWords, { sizePt: tableFontPt })] })] }),
            new TableCell({ width: { size: colAmount, type: WidthType.DXA }, verticalAlign: VerticalAlign.CENTER, margins: cellMargins, borders: { top: MED_BLACK, bottom: MED_BLACK, left: NO_BORDER_SIDE, right: MED_BLACK }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0, line: rowLineSpacingDxa }, children: [tnr(grandTotalFormatted, { bold: true, sizePt: tableFontPt })] })] }),
          ],
        });

        const sigLeftW = Math.round(CONTENT_WIDTH_DXA * 0.56);
        const sigRightW = CONTENT_WIDTH_DXA - sigLeftW;
        const supplierSigName = (item.conformeSupplierName || '').trim() || (item.supplier || '').trim() || "MAHARLIKA'S RESTAURANT";
        const officialSigName = (item.authorizedOfficialName || '').trim() || 'HON. LAWRENCE N. ARCA';
        const officialDesig = (item.authorizedOfficialDesignation || '').trim() || 'Municipal Mayor';
        const sangHalfW = Math.round(CONTENT_WIDTH_DXA * 0.5);

        children.push(
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [colStock, colUnit, colDesc, colQty, colUnitCost, colAmount],
            layout: TableLayoutType.FIXED,
            borders: { top: NO_BORDER_SIDE, bottom: MED_BLACK, left: MED_BLACK, right: MED_BLACK, insideHorizontal: THIN_BLACK, insideVertical: THIN_BLACK },
            rows: [itemHeaderRow, ...itemBodyRows, totalRow],
          }),
          new Paragraph({
            indent: { firstLine: 360 },
            spacing: { before: isCompressed ? 70 : 120, after: isCompressed ? 80 : 140, line: isCompressed ? 205 : 230 },
            children: [tnr('In case of failure to make the full delivery within the time specified above, a penalty of one-tenth (1/10) of one percent for every day of delay shall be imposed on the undelivered item/s.', { sizePt: isCompressed ? 9 : 9.5 })],
          }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [sigLeftW, sigRightW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                cantSplit: true,
                children: [
                  new TableCell({
                    width: { size: sigLeftW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: { top: 0, bottom: 0, left: 720, right: 240 },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: isCompressed ? 220 : 380, line: 215 }, children: [tnr('Conforme:', { sizePt: 9.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 215 }, children: [tnr(supplierSigName.toUpperCase(), { bold: true, sizePt: 9.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: isCompressed ? 140 : 240, line: 210 }, children: [tnr('Signature over Printed Name of Supplier', { sizePt: 9 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 205 }, border: { bottom: THIN_BLACK }, children: [tnr((item.conformeDate || '').trim() || ' ', { sizePt: 9 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 205 }, children: [tnr('Date', { sizePt: 9 })] }),
                    ],
                  }),
                  new TableCell({
                    width: { size: sigRightW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: { top: 0, bottom: 0, left: 200, right: 120 },
                    children: [
                      new Paragraph({ spacing: { before: 0, after: isCompressed ? 220 : 380, line: 215 }, children: [tnr('Very truly yours,', { sizePt: 9.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 215 }, children: [tnr(officialSigName.toUpperCase(), { bold: true, sizePt: 9.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 60, line: 210 }, children: [tnr('Signature over Printed Name of Authorized Official', { sizePt: 9 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 210 }, border: { bottom: THIN_BLACK }, children: [tnr(officialDesig, { sizePt: 9.5 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 205 }, children: [tnr('Designation', { sizePt: 9 })] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Table({
            width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
            columnWidths: [sangHalfW, CONTENT_WIDTH_DXA - sangHalfW],
            layout: TableLayoutType.FIXED,
            borders: NO_TABLE_BORDERS,
            rows: [
              new TableRow({
                cantSplit: true,
                children: [
                  new TableCell({
                    columnSpan: 2,
                    width: { size: CONTENT_WIDTH_DXA, type: WidthType.DXA },
                    borders: { top: MED_BLACK, bottom: NO_BORDER_SIDE, left: NO_BORDER_SIDE, right: NO_BORDER_SIDE },
                    margins: { top: isCompressed ? 50 : 80, bottom: 0, left: 60, right: 60 },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: isCompressed ? 110 : 180, line: 205 }, children: [tnr('(In case of Negotiated Purchase pursuant to Section 369 (a) of RA 7160, this portion must be accomplished.)', { sizePt: 9 })] }),
                      new Paragraph({ indent: { left: 320 }, spacing: { before: 0, after: isCompressed ? 100 : 160, line: 210 }, children: [tnr('Approved per Sanggunian Resolution No.:  ', { sizePt: 9 }), tnr((item.sanggunianResNo || '').trim() || '_____________________________________________', { underline: Boolean((item.sanggunianResNo || '').trim()), sizePt: 9 })] }),
                      new Paragraph({ indent: { left: 320 }, spacing: { before: 0, after: isCompressed ? 160 : 260, line: 210 }, children: [tnr('Certified Correct:', { sizePt: 9 })] }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                cantSplit: true,
                children: [
                  new TableCell({
                    width: { size: sangHalfW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: { top: 0, bottom: 0, left: 680, right: 680 },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 205 }, border: { bottom: THIN_BLACK }, children: [tnr((item.sanggunianSecretaryName || '').trim() || ' ', { bold: true, sizePt: 9 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 205 }, children: [tnr((item.sanggunianSecretaryLabel || '').trim() || 'Secretary to the Sanggunian', { sizePt: 9 })] }),
                    ],
                  }),
                  new TableCell({
                    width: { size: CONTENT_WIDTH_DXA - sangHalfW, type: WidthType.DXA },
                    borders: NO_CELL_BORDERS,
                    margins: { top: 0, bottom: 0, left: 680, right: 680 },
                    children: [
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 15, line: 205 }, border: { bottom: THIN_BLACK }, children: [tnr((item.sanggunianDate || '').trim() || ' ', { sizePt: 9 })] }),
                      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0, line: 205 }, children: [tnr('Date', { sizePt: 9 })] }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      });

      const doc = new Document({
        styles: { default: { document: { run: { font: 'Times New Roman', color: '000000', size: 20 } } } },
        sections: [{
          properties: {
            page: {
              size: { width: WIDTH_DXA, height: HEIGHT_DXA, orientation: PageOrientation.PORTRAIT },
              margin: { top: MARGIN_TOP_DXA, bottom: MARGIN_BOTTOM_DXA, left: MARGIN_LEFT_DXA, right: MARGIN_RIGHT_DXA },
            },
          },
          children,
        }],
      });

      const blob = await Packer.toBlob(doc);
      triggerDownload(blob, filename + '.docx');
      return;
    }

    const htmlPages = items.map(buildPoSheetHtml).join('<br clear="all" style="page-break-before:always" />');
    const pageSizeCss = paperSize === 'legal' ? '8.5in 14.0in' : paperSize === 'letter' ? '8.5in 11.0in' : '210mm 297mm';
    const htmlContent =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
      '<head><meta charset="utf-8"><style>@page Section1{size:' + pageSizeCss + ';margin:0.4in 0.45in;} body{font-family:"Times New Roman",serif;color:#000;} table{border-collapse:collapse;}</style></head><body>' +
      htmlPages +
      '</body></html>';
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    triggerDownload(blob, filename + '.doc');
  }

  function triggerDownload(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Wire Event Listeners
  el.uploadLogoBtn.addEventListener('click', () => el.logoUploadInput.click());
  el.logoUploadInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      customLogoDataUrl = String(ev.target.result || '');
      try {
        localStorage.setItem(LOGO_KEY, customLogoDataUrl);
      } catch (_) {}
      applyLogoToImages();
      if (!el.previewModal.hidden) renderPreviewModal();
    };
    reader.readAsDataURL(file);
  });

  el.resetLogoBtn.addEventListener('click', () => {
    customLogoDataUrl = '';
    localStorage.removeItem(LOGO_KEY);
    el.logoUploadInput.value = '';
    applyLogoToImages();
    if (!el.previewModal.hidden) renderPreviewModal();
  });

  el.modeAbstractBtn.addEventListener('click', () => switchDocMode('abstract'));
  el.modeCertificateBtn.addEventListener('click', () => switchDocMode('certificate'));
  el.modeRfqBtn.addEventListener('click', () => switchDocMode('rfq'));
  el.modePrBtn.addEventListener('click', () => switchDocMode('pr'));
  el.modePoBtn.addEventListener('click', () => switchDocMode('po'));

  el.loadSampleBtn.addEventListener('click', () => {
    el.sampleMenu.hidden = !el.sampleMenu.hidden;
  });

  el.certLoadSampleBtn.addEventListener('click', () => {
    el.certSampleMenu.hidden = !el.certSampleMenu.hidden;
  });

  el.rfqLoadSampleBtn.addEventListener('click', () => {
    el.rfqSampleMenu.hidden = !el.rfqSampleMenu.hidden;
  });

  el.prLoadSampleBtn.addEventListener('click', () => {
    el.prSampleMenu.hidden = !el.prSampleMenu.hidden;
  });

  el.poLoadSampleBtn.addEventListener('click', () => {
    el.poSampleMenu.hidden = !el.poSampleMenu.hidden;
  });

  document.addEventListener('click', (e) => {
    if (!el.sampleDropdownWrap.contains(e.target)) {
      el.sampleMenu.hidden = true;
    }
    if (!el.certSampleDropdownWrap.contains(e.target)) {
      el.certSampleMenu.hidden = true;
    }
    if (!el.rfqSampleDropdownWrap.contains(e.target)) {
      el.rfqSampleMenu.hidden = true;
    }
    if (!el.prSampleDropdownWrap.contains(e.target)) {
      el.prSampleMenu.hidden = true;
    }
    if (!el.poSampleDropdownWrap.contains(e.target)) {
      el.poSampleMenu.hidden = true;
    }
  });

  el.sampleMenu.querySelectorAll('.dropdown-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-sample')) || 0;
      const sample = structuredClone(SAMPLES[idx] || SAMPLES[0]);
      formData = {
        ...sample,
        currencyDocSymbol: formData.currencyDocSymbol,
        signatories: formData.signatories || { ...DEFAULT_SIGNATORIES },
      };
      el.sampleMenu.hidden = true;
      syncInputsFromState();
    });
  });

  el.clearFormBtn.addEventListener('click', () => {
    formData = {
      abstractNumber: '',
      openedDate: '',
      purpose: '',
      autoTrim: true,
      bidders: [
        { name: '', location: '', amountRaw: '' },
        { name: '', location: '', amountRaw: '' },
        { name: '', location: '', amountRaw: '' },
      ],
      winningBidderMode: 'auto',
      currencyDocSymbol: formData.currencyDocSymbol,
      signatories: formData.signatories || { ...DEFAULT_SIGNATORIES },
    };
    syncInputsFromState();
  });

  el.abstractNumber.addEventListener('input', (e) => {
    formData.abstractNumber = e.target.value;
  });
  el.openedDate.addEventListener('input', (e) => {
    formData.openedDate = e.target.value;
  });
  el.purposeInput.addEventListener('input', (e) => {
    formData.purpose = e.target.value;
    renderDerivedUI();
  });
  el.autoTrimCheckbox.addEventListener('change', (e) => {
    formData.autoTrim = e.target.checked;
    renderDerivedUI();
  });

  [0, 1, 2].forEach((i) => {
    const nameInput = document.getElementById('bidderName' + i);
    const locInput = document.getElementById('bidderLoc' + i);
    const amtInput = document.getElementById('bidderAmt' + i);

    nameInput.addEventListener('input', (e) => {
      formData.bidders[i].name = e.target.value;
      renderDerivedUI();
    });
    locInput.addEventListener('input', (e) => {
      formData.bidders[i].location = e.target.value;
      renderDerivedUI();
    });
    amtInput.addEventListener('input', (e) => {
      formData.bidders[i].amountRaw = e.target.value;
      renderDerivedUI();
    });
    amtInput.addEventListener('blur', () => {
      const val = parseBidAmount(formData.bidders[i].amountRaw);
      if (val !== null) {
        formData.bidders[i].amountRaw = formatCurrency(val, '₱');
        amtInput.value = formData.bidders[i].amountRaw;
        renderDerivedUI();
      }
    });
  });

  el.sortBiddersBtn.addEventListener('click', () => {
    formData.bidders.sort((a, b) => {
      const av = parseBidAmount(a.amountRaw) ?? Infinity;
      const bv = parseBidAmount(b.amountRaw) ?? Infinity;
      return av - bv;
    });
    formData.winningBidderMode = 'auto';
    syncInputsFromState();
  });

  el.winningBidderSelect.addEventListener('change', (e) => {
    formData.winningBidderMode = e.target.value;
    renderDerivedUI();
  });

  el.loadIntoFormBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      if (selectedPoHistoryId) loadPoHistoryItem(selectedPoHistoryId);
    } else if (docMode === 'pr') {
      if (selectedPrHistoryId) loadPrHistoryItem(selectedPrHistoryId);
    } else if (docMode === 'rfq') {
      if (selectedRfqHistoryId) loadRfqHistoryItem(selectedRfqHistoryId);
    } else if (docMode === 'certificate') {
      if (selectedCertHistoryId) loadCertHistoryItem(selectedCertHistoryId);
    } else if (selectedHistoryId) {
      loadHistoryItem(selectedHistoryId);
    }
  });

  el.clearHistoryBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      poHistory = [];
      selectedPoHistoryId = '';
      savePoHistory();
      renderHistory();
    } else if (docMode === 'pr') {
      prHistory = [];
      selectedPrHistoryId = '';
      savePrHistory();
      renderHistory();
    } else if (docMode === 'rfq') {
      rfqHistory = [];
      selectedRfqHistoryId = '';
      saveRfqHistory();
      renderHistory();
    } else if (docMode === 'certificate') {
      certHistory = [];
      selectedCertHistoryId = '';
      saveCertHistory();
      renderHistory();
    } else {
      history = [];
      selectedHistoryId = '';
      saveHistory();
      renderHistory();
    }
  });

  el.abstractForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const snapshot = structuredClone(formData);
    snapshot.abstractNumber = (snapshot.abstractNumber || '').trim() || 'AC –0000-00-00';

    const existingIdx = history.findIndex(
      (h) =>
        (h.data.abstractNumber || '').trim().toLowerCase() ===
        snapshot.abstractNumber.toLowerCase()
    );
    const tag = new Date().toLocaleTimeString('en-PH', {
      hour: 'numeric',
      minute: '2-digit',
    });

    if (existingIdx >= 0) {
      history[existingIdx] = {
        ...history[existingIdx],
        createdAt: new Date().toISOString(),
        tag,
        data: snapshot,
      };
      selectedHistoryId = history[existingIdx].id;
    } else {
      const id = 'abs-' + Date.now();
      history.unshift({ id, createdAt: new Date().toISOString(), tag, data: snapshot });
      selectedHistoryId = id;
    }

    saveHistory();
    renderHistory();
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  el.openPreviewBtn.addEventListener('click', () => {
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  el.closeModalBtn.addEventListener('click', () => {
    el.previewModal.hidden = true;
  });

  el.fmtPBtn.addEventListener('click', () => {
    formData.currencyDocSymbol = 'P';
    renderPreviewModal();
  });
  el.fmtPesoBtn.addEventListener('click', () => {
    formData.currencyDocSymbol = '₱';
    renderPreviewModal();
  });

  el.viewSingleBtn.addEventListener('click', () => {
    viewMode = 'single';
    renderPreviewModal();
  });
  el.viewAllBtn.addEventListener('click', () => {
    viewMode = 'all';
    renderPreviewModal();
  });

  el.toggleSigBtn.addEventListener('click', () => {
    el.signatoriesDrawer.hidden = !el.signatoriesDrawer.hidden;
  });
  el.doneSigBtn.addEventListener('click', () => {
    el.signatoriesDrawer.hidden = true;
  });

  [
    ['sigChairName', 'chairmanName'],
    ['sigChairTitle', 'chairmanTitle'],
    ['sigViceName', 'viceChairmanName'],
    ['sigViceTitle', 'viceChairmanTitle'],
    ['sigMem1Name', 'member1Name'],
    ['sigMem1Title', 'member1Title'],
    ['sigMem2Name', 'member2Name'],
    ['sigMem2Title', 'member2Title'],
    ['sigMem3Name', 'member3Name'],
    ['sigMem3Title', 'member3Title'],
  ].forEach(([domId, key]) => {
    document.getElementById(domId).addEventListener('input', (e) => {
      if (!formData.signatories) formData.signatories = { ...DEFAULT_SIGNATORIES };
      formData.signatories[key] = e.target.value;
      renderPreviewModal();
    });
  });

  el.printPdfBtn.addEventListener('click', () => window.print());

  el.paperLetterBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      poData.paperSize = 'letter';
      el.poPaperSize.value = 'letter';
    } else if (docMode === 'pr') {
      prData.paperSize = 'letter';
      el.prPaperSize.value = 'letter';
    } else if (docMode === 'rfq') {
      rfqData.paperSize = 'letter';
      el.rfqPaperSize.value = 'letter';
    } else {
      certData.paperSize = 'letter';
      el.certPaperSize.value = 'letter';
    }
    renderPreviewModal();
  });
  el.paperA4Btn.addEventListener('click', () => {
    if (docMode === 'po') {
      poData.paperSize = 'a4';
      el.poPaperSize.value = 'a4';
    } else if (docMode === 'pr') {
      prData.paperSize = 'a4';
      el.prPaperSize.value = 'a4';
    } else if (docMode === 'rfq') {
      rfqData.paperSize = 'a4';
      el.rfqPaperSize.value = 'a4';
    } else {
      certData.paperSize = 'a4';
      el.certPaperSize.value = 'a4';
    }
    renderPreviewModal();
  });
  el.paperLegalBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      poData.paperSize = 'legal';
      el.poPaperSize.value = 'legal';
    } else if (docMode === 'pr') {
      prData.paperSize = 'legal';
      el.prPaperSize.value = 'legal';
    } else if (docMode === 'rfq') {
      rfqData.paperSize = 'legal';
      el.rfqPaperSize.value = 'legal';
    } else {
      certData.paperSize = 'legal';
      el.certPaperSize.value = 'legal';
    }
    renderPreviewModal();
  });

  // Certificate Form Events
  el.certSampleMenu.querySelectorAll('.cert-sample-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-cert-sample')) || 0;
      certData = structuredClone(CERT_SAMPLES[idx] || CERT_SAMPLES[0]);
      el.certSampleMenu.hidden = true;
      syncCertInputsFromState();
    });
  });

  el.certClearFormBtn.addEventListener('click', () => {
    certData = {
      referenceTitle: '',
      deliverySubject: '',
      autoTrim: true,
      leftSignatoryName: 'WILMA E. PIEDAD',
      leftSignatoryPosition: 'Property Custodian/Inspection Officer',
      rightSignatoryName: 'RIA KRIS O. TIBAYAN',
      rightSignatoryPosition: 'OIC Peso',
      notedByName: 'HERMINIA M. QUENERI',
      notedByPosition: 'Mun. General Services Officer',
      paperSize: certData.paperSize || 'letter',
    };
    syncCertInputsFromState();
  });

  el.certRefTitle.addEventListener('input', (e) => {
    certData.referenceTitle = e.target.value;
  });
  el.certPaperSize.addEventListener('change', (e) => {
    certData.paperSize = e.target.value;
  });
  el.certDeliverySubject.addEventListener('input', (e) => {
    certData.deliverySubject = e.target.value;
    renderCertDerivedUI();
  });
  el.certAutoTrimCheckbox.addEventListener('change', (e) => {
    certData.autoTrim = e.target.checked;
    renderCertDerivedUI();
  });
  el.certLeftName.addEventListener('input', (e) => {
    certData.leftSignatoryName = e.target.value;
  });
  el.certLeftPos.addEventListener('input', (e) => {
    certData.leftSignatoryPosition = e.target.value;
  });
  el.certRightName.addEventListener('input', (e) => {
    certData.rightSignatoryName = e.target.value;
    renderCertDerivedUI();
  });
  el.certRightPos.addEventListener('input', (e) => {
    certData.rightSignatoryPosition = e.target.value;
    renderCertDerivedUI();
  });
  el.certNotedName.addEventListener('input', (e) => {
    certData.notedByName = e.target.value;
    renderCertDerivedUI();
  });
  el.certNotedPos.addEventListener('input', (e) => {
    certData.notedByPosition = e.target.value;
  });

  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      certData.rightSignatoryName = btn.getAttribute('data-preset-name') || '';
      certData.rightSignatoryPosition = btn.getAttribute('data-preset-pos') || '';
      syncCertInputsFromState();
    });
  });

  el.certificateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const snapshot = structuredClone(certData);
    snapshot.referenceTitle = (snapshot.referenceTitle || '').trim() || 'cert. of completion';

    const existingIdx = certHistory.findIndex(
      (h) =>
        (h.data.referenceTitle || '').trim().toLowerCase() ===
        snapshot.referenceTitle.toLowerCase()
    );
    const tag = new Date().toLocaleTimeString('en-PH', {
      hour: 'numeric',
      minute: '2-digit',
    });

    if (existingIdx >= 0) {
      certHistory[existingIdx] = {
        ...certHistory[existingIdx],
        createdAt: new Date().toISOString(),
        tag,
        data: snapshot,
      };
      selectedCertHistoryId = certHistory[existingIdx].id;
    } else {
      const id = 'cert-' + Date.now();
      certHistory.unshift({ id, createdAt: new Date().toISOString(), tag, data: snapshot });
      selectedCertHistoryId = id;
    }

    saveCertHistory();
    renderHistory();
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  // RFQ Form Events
  el.rfqSampleMenu.querySelectorAll('.rfq-sample-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-rfq-sample')) || 0;
      rfqData = structuredClone(RFQ_SAMPLES[idx] || RFQ_SAMPLES[0]);
      el.rfqSampleMenu.hidden = true;
      syncRfqInputsFromState();
    });
  });

  el.rfqClearFormBtn.addEventListener('click', () => {
    rfqData = {
      referenceTitle: '',
      date: '',
      quotationNo: '',
      supplierName: '',
      supplierAddress: '',
      submissionDeadline: '',
      signatoryName: 'NOAH M. CAASI',
      signatoryPosition: 'Municipal Administrator',
      items: [
        {
          id: 'rfq-' + Date.now(),
          itemNo: '',
          description: '',
          quantity: '',
          unitCost: '',
          totalAmount: '',
          isCenteredHeader: false,
        },
      ],
      brandAndModel: '',
      deliveryPeriod: '',
      warranty: '',
      priceValidity: '',
      paperSize: rfqData.paperSize || 'legal',
    };
    syncRfqInputsFromState();
  });

  el.rfqSupplierName.addEventListener('input', (e) => {
    rfqData.supplierName = e.target.value;
  });
  el.rfqSupplierAddress.addEventListener('input', (e) => {
    rfqData.supplierAddress = e.target.value;
  });
  el.rfqRefTitle.addEventListener('input', (e) => {
    rfqData.referenceTitle = e.target.value;
  });
  el.rfqDate.addEventListener('input', (e) => {
    rfqData.date = e.target.value;
  });
  el.rfqQuotationNo.addEventListener('input', (e) => {
    rfqData.quotationNo = e.target.value;
  });
  el.rfqPaperSize.addEventListener('change', (e) => {
    rfqData.paperSize = e.target.value;
  });
  el.rfqSignatoryName.addEventListener('input', (e) => {
    rfqData.signatoryName = e.target.value;
    renderRfqPresetHighlights();
  });
  el.rfqSignatoryPosition.addEventListener('input', (e) => {
    rfqData.signatoryPosition = e.target.value;
    renderRfqPresetHighlights();
  });

  document.querySelectorAll('.rfq-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      rfqData.signatoryName = btn.getAttribute('data-rfq-name') || '';
      rfqData.signatoryPosition = btn.getAttribute('data-rfq-pos') || '';
      syncRfqInputsFromState();
    });
  });

  el.rfqAddRowBtn.addEventListener('click', () => {
    rfqData.items.push({
      id: 'rfq-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      itemNo: '',
      description: '',
      quantity: '',
      unitCost: '',
      totalAmount: '',
      isCenteredHeader: false,
    });
    renderRfqItemsTable();
  });

  el.rfqAddHeaderBtn.addEventListener('click', () => {
    rfqData.items.push({
      id: 'rfq-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      itemNo: '',
      description: '',
      quantity: '',
      unitCost: '',
      totalAmount: '',
      isCenteredHeader: true,
    });
    renderRfqItemsTable();
  });

  el.rfqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const snapshot = structuredClone(rfqData);
    snapshot.referenceTitle =
      (snapshot.referenceTitle || '').trim() ||
      'RFQ-' + ((snapshot.supplierName || '').trim() || 'Supplier').slice(0, 24);

    const existingIdx = rfqHistory.findIndex(
      (h) =>
        (h.data.referenceTitle || '').trim().toLowerCase() ===
        snapshot.referenceTitle.toLowerCase()
    );
    const tag = new Date().toLocaleTimeString('en-PH', {
      hour: 'numeric',
      minute: '2-digit',
    });

    if (existingIdx >= 0) {
      rfqHistory[existingIdx] = {
        ...rfqHistory[existingIdx],
        createdAt: new Date().toISOString(),
        tag,
        data: snapshot,
      };
      selectedRfqHistoryId = rfqHistory[existingIdx].id;
    } else {
      const id = 'rfq-' + Date.now();
      rfqHistory.unshift({ id, createdAt: new Date().toISOString(), tag, data: snapshot });
      selectedRfqHistoryId = id;
    }

    saveRfqHistory();
    renderHistory();
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  // PR Form Events
  el.prSampleMenu.querySelectorAll('.pr-sample-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-pr-sample')) || 0;
      prData = structuredClone(PR_SAMPLES[idx] || PR_SAMPLES[0]);
      el.prSampleMenu.hidden = true;
      syncPrInputsFromState();
    });
  });

  el.prClearFormBtn.addEventListener('click', () => {
    prData = {
      ...structuredClone(prData),
      referenceTitle: '',
      fund: '',
      department: '',
      section: '',
      prNo: '',
      fpp: '',
      prDate: '',
      sectionDate: '',
      items: [
        {
          id: 'pr-' + Date.now(),
          itemNo: '',
          unit: '',
          description: '',
          quantity: '',
          unitCost: '',
          totalCost: '',
        },
      ],
      purpose: '',
      paperSize: prData.paperSize || 'legal',
    };
    syncPrInputsFromState();
  });

  el.prNoInput.addEventListener('input', (e) => { prData.prNo = e.target.value; });
  el.prDateInput.addEventListener('input', (e) => { prData.prDate = e.target.value; });
  el.prPaperSize.addEventListener('change', (e) => { prData.paperSize = e.target.value; });
  el.prDepartment.addEventListener('input', (e) => { prData.department = e.target.value; });
  el.prSection.addEventListener('input', (e) => { prData.section = e.target.value; });
  el.prFund.addEventListener('input', (e) => { prData.fund = e.target.value; });
  el.prFpp.addEventListener('input', (e) => { prData.fpp = e.target.value; });
  el.prSectionDate.addEventListener('input', (e) => { prData.sectionDate = e.target.value; });
  el.prRefTitle.addEventListener('input', (e) => { prData.referenceTitle = e.target.value; });
  el.prPurposeInput.addEventListener('input', (e) => { prData.purpose = e.target.value; });
  el.prCertByName.addEventListener('input', (e) => {
    prData.certifiedByName = e.target.value;
    renderPrCertPresetHighlights();
  });
  el.prCertByPos.addEventListener('input', (e) => { prData.certifiedByPosition = e.target.value; });
  el.prReqLabel.addEventListener('input', (e) => { prData.requestedByLabel = e.target.value; });
  el.prReqName.addEventListener('input', (e) => { prData.requestedByName = e.target.value; });
  el.prReqDesig.addEventListener('input', (e) => { prData.requestedByDesignation = e.target.value; });
  el.prCashLabel.addEventListener('input', (e) => { prData.cashAvailLabel = e.target.value; });
  el.prCashName.addEventListener('input', (e) => { prData.cashAvailName = e.target.value; });
  el.prCashDesig.addEventListener('input', (e) => { prData.cashAvailDesignation = e.target.value; });
  el.prAppLabel.addEventListener('input', (e) => { prData.approvedByLabel = e.target.value; });
  el.prAppName.addEventListener('input', (e) => { prData.approvedByName = e.target.value; });
  el.prAppDesig.addEventListener('input', (e) => { prData.approvedByDesignation = e.target.value; });

  document.querySelectorAll('.pr-cert-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      prData.certifiedByName = btn.getAttribute('data-pr-cert-name') || '';
      prData.certifiedByPosition = btn.getAttribute('data-pr-cert-pos') || '';
      syncPrInputsFromState();
    });
  });

  el.prAddRowBtn.addEventListener('click', () => {
    prData.items.push({
      id: 'pr-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      itemNo: '',
      unit: '',
      description: '',
      quantity: '',
      unitCost: '',
      totalCost: '',
    });
    renderPrItemsTable();
  });

  el.prForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const snapshot = structuredClone(prData);
    snapshot.referenceTitle =
      (snapshot.referenceTitle || '').trim() ||
      'PR-' + ((snapshot.prNo || '').trim() || '000-2026').slice(0, 24);

    const existingIdx = prHistory.findIndex(
      (h) =>
        (h.data.referenceTitle || '').trim().toLowerCase() ===
        snapshot.referenceTitle.toLowerCase()
    );
    const tag = new Date().toLocaleTimeString('en-PH', {
      hour: 'numeric',
      minute: '2-digit',
    });

    if (existingIdx >= 0) {
      prHistory[existingIdx] = {
        ...prHistory[existingIdx],
        createdAt: new Date().toISOString(),
        tag,
        data: snapshot,
      };
      selectedPrHistoryId = prHistory[existingIdx].id;
    } else {
      const id = 'pr-' + Date.now();
      prHistory.unshift({ id, createdAt: new Date().toISOString(), tag, data: snapshot });
      selectedPrHistoryId = id;
    }

    savePrHistory();
    renderHistory();
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  // PO Form Events
  el.poSampleMenu.querySelectorAll('.po-sample-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-po-sample')) || 0;
      poData = structuredClone(PO_SAMPLES[idx] || PO_SAMPLES[0]);
      el.poSampleMenu.hidden = true;
      syncPoInputsFromState();
    });
  });

  el.poClearFormBtn.addEventListener('click', () => {
    poData = {
      referenceTitle: '',
      supplier: '',
      address: '',
      tin: '',
      poNo: '',
      poDate: '',
      modeOfProcurement: 'N/P Sec.53.9 SVP',
      prNos: '',
      placeOfDelivery: 'Maragondon, Cavite',
      dateOfDelivery: '',
      deliveryTerm: 'FOD',
      paymentTerm: '30 days upon delivery term',
      items: [{
        id: 'po-' + Date.now(),
        stockNo: '',
        unit: '',
        description: '',
        quantity: '',
        unitCost: '',
        amount: '',
        isCenteredHeader: false,
      }],
      autoAmountInWords: true,
      amountInWords: '',
      conformeSupplierName: '',
      conformeDate: '',
      authorizedOfficialName: poData.authorizedOfficialName || 'HON. LAWRENCE N. ARCA',
      authorizedOfficialDesignation: poData.authorizedOfficialDesignation || 'Municipal Mayor',
      sanggunianResNo: '',
      sanggunianSecretaryName: '',
      sanggunianSecretaryLabel: 'Secretary to the Sanggunian',
      sanggunianDate: '',
      paperSize: poData.paperSize || 'a4',
    };
    syncPoInputsFromState();
  });

  el.poSupplierInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (!poData.conformeSupplierName || poData.conformeSupplierName === poData.supplier) {
      poData.conformeSupplierName = val;
      el.poConformeName.value = val;
    }
    poData.supplier = val;
  });
  el.poAddressInput.addEventListener('input', (e) => { poData.address = e.target.value; });
  el.poPrNosInput.addEventListener('input', (e) => { poData.prNos = e.target.value; });
  el.poNoInput.addEventListener('input', (e) => { poData.poNo = e.target.value; });
  el.poDateInput.addEventListener('input', (e) => { poData.poDate = e.target.value; });
  el.poTinInput.addEventListener('input', (e) => { poData.tin = e.target.value; });
  el.poModeProcInput.addEventListener('input', (e) => { poData.modeOfProcurement = e.target.value; });
  el.poPlaceDeliveryInput.addEventListener('input', (e) => { poData.placeOfDelivery = e.target.value; });
  el.poDateDeliveryInput.addEventListener('input', (e) => { poData.dateOfDelivery = e.target.value; });
  el.poDeliveryTermInput.addEventListener('input', (e) => { poData.deliveryTerm = e.target.value; });
  el.poPaymentTermInput.addEventListener('input', (e) => { poData.paymentTerm = e.target.value; });
  el.poPaperSize.addEventListener('change', (e) => { poData.paperSize = e.target.value; });
  el.poRefTitle.addEventListener('input', (e) => { poData.referenceTitle = e.target.value; });

  el.poAddRowBtn.addEventListener('click', () => {
    poData.items.push({
      id: 'po-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      stockNo: '',
      unit: '',
      description: '',
      quantity: '',
      unitCost: '',
      amount: '',
      isCenteredHeader: false,
    });
    renderPoItemsTable();
  });

  el.poAddHeaderBtn.addEventListener('click', () => {
    poData.items.push({
      id: 'po-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      stockNo: '',
      unit: '',
      description: '',
      quantity: '',
      unitCost: '',
      amount: '',
      isCenteredHeader: true,
    });
    renderPoItemsTable();
  });

  el.poAutoWordsCheckbox.addEventListener('change', (e) => {
    poData.autoAmountInWords = e.target.checked;
    updatePoSummaryAndWords();
  });

  el.poAmountWordsInput.addEventListener('input', (e) => {
    poData.autoAmountInWords = false;
    poData.amountInWords = e.target.value;
    el.poAutoWordsCheckbox.checked = false;
    el.poAmountWordsInput.readOnly = false;
    el.poAmountWordsInput.classList.add('is-manual');
  });

  el.poSyncSupplierBtn.addEventListener('click', () => {
    poData.conformeSupplierName = poData.supplier;
    el.poConformeName.value = poData.conformeSupplierName;
  });

  el.poConformeName.addEventListener('input', (e) => { poData.conformeSupplierName = e.target.value; });
  el.poConformeDate.addEventListener('input', (e) => { poData.conformeDate = e.target.value; });
  el.poOfficialName.addEventListener('input', (e) => {
    poData.authorizedOfficialName = e.target.value;
    renderPoOfficialPresetHighlights();
  });
  el.poOfficialDesig.addEventListener('input', (e) => { poData.authorizedOfficialDesignation = e.target.value; });
  el.poSangResNo.addEventListener('input', (e) => { poData.sanggunianResNo = e.target.value; });
  el.poSangSecName.addEventListener('input', (e) => { poData.sanggunianSecretaryName = e.target.value; });
  el.poSangSecLabel.addEventListener('input', (e) => { poData.sanggunianSecretaryLabel = e.target.value; });
  el.poSangDate.addEventListener('input', (e) => { poData.sanggunianDate = e.target.value; });

  document.querySelectorAll('.po-official-preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      poData.authorizedOfficialName = btn.getAttribute('data-po-name') || '';
      poData.authorizedOfficialDesignation = btn.getAttribute('data-po-desig') || '';
      syncPoInputsFromState();
    });
  });

  el.poForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const snapshot = structuredClone(poData);
    const computedWords = snapshot.autoAmountInWords
      ? numberToPesosWords(calculatePoTotal(snapshot.items))
      : snapshot.amountInWords;
    snapshot.amountInWords = computedWords;
    snapshot.referenceTitle =
      (snapshot.referenceTitle || '').trim() ||
      'PO-' + ((snapshot.prNos || '').trim() || (snapshot.supplier || '').trim() || 'Appendix49').slice(0, 24);

    const existingIdx = poHistory.findIndex(
      (h) => (h.data.referenceTitle || '').trim().toLowerCase() === snapshot.referenceTitle.toLowerCase()
    );
    const tag = new Date().toLocaleTimeString('en-PH', { hour: 'numeric', minute: '2-digit' });

    if (existingIdx >= 0) {
      poHistory[existingIdx] = {
        ...poHistory[existingIdx],
        createdAt: new Date().toISOString(),
        tag,
        data: snapshot,
      };
      selectedPoHistoryId = poHistory[existingIdx].id;
    } else {
      const id = 'po-' + Date.now();
      poHistory.unshift({ id, createdAt: new Date().toISOString(), tag, data: snapshot });
      selectedPoHistoryId = id;
    }

    savePoHistory();
    renderHistory();
    el.previewModal.hidden = false;
    renderPreviewModal();
  });

  el.downloadDocxBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      const safeName = (poData.referenceTitle || 'PO-' + (poData.prNos || 'Appendix49'))
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        .replace(/_+/g, '_');
      exportPoWordDocuments([poData], safeName, poData.paperSize);
      return;
    }
    if (docMode === 'pr') {
      const safeName = (prData.referenceTitle || 'PR-' + (prData.prNo || 'Appendix47'))
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        .replace(/_+/g, '_');
      exportPrWordDocuments([prData], safeName, prData.paperSize);
      return;
    }
    if (docMode === 'rfq') {
      const safeName = (rfqData.referenceTitle || 'RFQ-SF-GOOD-80')
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        .replace(/_+/g, '_');
      exportRfqWordDocuments([rfqData], safeName, rfqData.paperSize);
      return;
    }
    if (docMode === 'certificate') {
      const safeName = (certData.referenceTitle || 'Certificate-of-Delivery')
        .replace(/[^a-zA-Z0-9-_]/g, '_')
        .replace(/_+/g, '_');
      exportCertificateWordDocuments([certData], safeName, certData.paperSize);
      return;
    }
    const safeName = (formData.abstractNumber || 'Abstract-of-Canvass')
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      .replace(/_+/g, '_');
    exportWordDocuments([formData], safeName);
  });

  el.downloadAllDocxBtn.addEventListener('click', () => {
    if (docMode === 'po') {
      if (!poHistory.length) return;
      const list = poHistory.map((h) => ({ ...h.data, paperSize: poData.paperSize }));
      exportPoWordDocuments(list, 'PURCHASE_ORDER_BATCH', poData.paperSize);
      return;
    }
    if (docMode === 'pr') {
      if (!prHistory.length) return;
      const list = prHistory.map((h) => ({
        ...h.data,
        paperSize: prData.paperSize,
      }));
      exportPrWordDocuments(list, 'PURCHASE_REQUEST_BATCH', prData.paperSize);
      return;
    }
    if (docMode === 'rfq') {
      if (!rfqHistory.length) return;
      const list = rfqHistory.map((h) => ({
        ...h.data,
        paperSize: rfqData.paperSize,
      }));
      exportRfqWordDocuments(list, 'REQUEST_FOR_QUOTATION_BATCH', rfqData.paperSize);
      return;
    }
    if (docMode === 'certificate') {
      if (!certHistory.length) return;
      const list = certHistory.map((h) => ({
        ...h.data,
        paperSize: certData.paperSize,
      }));
      exportCertificateWordDocuments(
        list,
        'CERTIFICATE_OF_DELIVERY_BATCH',
        certData.paperSize
      );
      return;
    }
    if (!history.length) return;
    const list = history.map((h) => ({
      ...h.data,
      currencyDocSymbol: formData.currencyDocSymbol,
      signatories: formData.signatories,
    }));
    exportWordDocuments(list, 'ABSTRACT_OF_CANVASS_BATCH');
  });

  // Initialize
  applyLogoToImages();
  syncInputsFromState();
  syncCertInputsFromState();
  syncRfqInputsFromState();
  syncPrInputsFromState();
  syncPoInputsFromState();
  renderHistory();
})();
