import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Page() {
  return (
    <article className="doc-content">
      <h1>REL 5 — 워크로드 상태를 어떻게 모니터링합니까?</h1>

      <p>
        워크로드의 각 구성 요소와 전반적인 상태를 지속적으로 모니터링하여
        문제를 조기에 발견하고 자동으로 복구합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>REL05-BP01:</strong> 모든 워크로드 구성 요소 모니터링<br />
          <span>Amazon CloudWatch를 사용하여 인프라, 애플리케이션, 비즈니스 메트릭을 수집하고 모니터링합니다.</span>
        </li>
        <li>
          <strong>REL05-BP02:</strong> 알림 및 경보 설계<br />
          <span>임계값 기반의 경보를 설정하고 의미 있는 알림만 전송하여 알림 피로를 방지합니다.</span>
        </li>
        <li>
          <strong>REL05-BP03:</strong> 모니터링 스토리지 크기 검토<br />
          <span>로그와 메트릭 데이터의 보존 기간을 설정하여 비용을 관리하면서 필요한 데이터를 유지합니다.</span>
        </li>
        <li>
          <strong>REL05-BP04:</strong> 자동 복구를 위한 모니터링 사용<br />
          <span>CloudWatch Alarm, EC2 Auto Recovery, Auto Scaling을 설정하여 장애 시 자동 복구가 이루어지도록 합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
