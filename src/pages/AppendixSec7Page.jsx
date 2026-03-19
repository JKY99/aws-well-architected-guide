import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec7Page() {
  return (
    <article className="doc-content">
      <h1>SEC 7 — 컴퓨팅 리소스를 어떻게 보호합니까?</h1>

      <p>
        EC2 인스턴스, 컨테이너, Lambda 함수 등 컴퓨팅 리소스를
        취약점과 위협으로부터 보호합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SEC07-BP01:</strong> 취약점 관리 수행<br />
          <span>Amazon Inspector를 사용하여 EC2 인스턴스와 컨테이너 이미지의 취약점을 자동으로 스캔하고 교정합니다.</span>
        </li>
        <li>
          <strong>SEC07-BP02:</strong> 관리형 서비스 감소<br />
          <span>관리형 서비스와 서버리스 서비스를 사용하면 운영 체제, 패치, 런타임 관리 부담을 AWS에 위임할 수 있습니다.</span>
        </li>
        <li>
          <strong>SEC07-BP03:</strong> 취약점 패치 적용 자동화<br />
          <span>AWS Systems Manager Patch Manager를 사용하여 EC2 인스턴스에 패치를 자동으로 적용합니다.</span>
        </li>
        <li>
          <strong>SEC07-BP04:</strong> 컴퓨팅 액세스 줄이기<br />
          <span>SSH/RDP 직접 접근을 최소화하고 AWS Systems Manager Session Manager를 사용하여 안전한 원격 접근을 제공합니다.</span>
        </li>
        <li>
          <strong>SEC07-BP05:</strong> 코드 서명 구현<br />
          <span>배포되는 코드와 아티팩트의 무결성을 검증하여 변조된 코드 실행을 방지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
