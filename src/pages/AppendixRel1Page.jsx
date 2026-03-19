import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Page() {
  return (
    <article className="doc-content">
      <h1>REL 1 — 서비스 한도를 어떻게 관리합니까?</h1>

      <p>
        AWS 서비스 한도(Service Quotas)를 파악하고 워크로드가 한도에 도달하기 전에
        증가를 요청하여 예기치 않은 장애를 방지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>REL01-BP01:</strong> 서비스 한도 파악<br />
          <span>AWS Service Quotas 콘솔을 사용하여 현재 사용량과 한도를 모니터링합니다.</span>
        </li>
        <li>
          <strong>REL01-BP02:</strong> 잠재적 인프라 변화 관리<br />
          <span>워크로드 성장에 따른 서비스 한도 변화를 예측하고 사전에 한도 증가를 요청합니다.</span>
        </li>
        <li>
          <strong>REL01-BP03:</strong> 한도에 도달하면 알림 수신<br />
          <span>CloudWatch 경보를 설정하여 서비스 사용량이 한도의 80% 이상에 도달하면 알림을 받습니다.</span>
        </li>
        <li>
          <strong>REL01-BP04:</strong> 서비스 한도 변경 자동화 관리<br />
          <span>AWS Service Quotas API를 사용하여 한도 변경 요청을 자동화합니다.</span>
        </li>
        <li>
          <strong>REL01-BP05:</strong> 고정 제약 사항 수용<br />
          <span>변경할 수 없는 한도에 대해서는 아키텍처를 조정하여 해당 한도 내에서 운영합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
