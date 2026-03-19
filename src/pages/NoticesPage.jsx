import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function NoticesPage() {
  return (
    <article className="doc-content">
      <h1>공지사항 (Notices)</h1>

      <p>
        고객은 이 문서의 정보를 독립적으로 평가할 책임이 있습니다. 이 문서는: (a) 정보 제공 목적으로만 작성되었으며, (b) 사전 통보 없이 변경될 수 있는 현재 AWS 제품 및 관행을 나타내고, (c) AWS 및 그 계열사, 공급업체 또는 라이선서로부터의 어떠한 약속이나 보증도 구성하지 않습니다. AWS 제품 또는 서비스는 명시적이든 묵시적이든 어떠한 종류의 보증, 진술 또는 조건 없이 "있는 그대로" 제공됩니다. 고객에 대한 AWS의 책임과 의무는 AWS 계약에 의해 통제되며, 이 문서는 AWS와 고객 간의 어떠한 계약의 일부도 아니며 수정하지도 않습니다.
      </p>

      <p>
        © 2024 Amazon Web Services, Inc. 또는 그 계열사. 모든 권리 보유.
      </p>

      <PageNav />
    </article>
  );
}
