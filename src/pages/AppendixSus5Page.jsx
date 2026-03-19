import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Page() {
  return (
    <article className="doc-content">
      <h1>SUS 5 — 하드웨어 및 서비스에서 지속 가능성을 어떻게 달성합니까?</h1>

      <p>
        에너지 효율적인 하드웨어와 관리형 서비스를 사용하여
        워크로드의 탄소 발자국을 최소화합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>SUS05-BP01:</strong> 필요한 최소 하드웨어 사용<br />
          <span>Compute Optimizer로 실제 사용량에 맞는 최소 크기 인스턴스를 선택하여 에너지 낭비를 줄입니다.</span>
        </li>
        <li>
          <strong>SUS05-BP02:</strong> 에너지 효율적인 하드웨어 사용<br />
          <span>AWS Graviton 프로세서를 사용하면 동일 성능 대비 최대 60% 적은 에너지를 소비합니다.</span>
        </li>
        <li>
          <strong>SUS05-BP03:</strong> 관리형 서비스 사용<br />
          <span>서버리스(Lambda, Fargate) 및 관리형 서비스를 사용하여 공유 인프라의 효율성을 활용합니다.</span>
        </li>
        <li>
          <strong>SUS05-BP04:</strong> 새로운 에너지 효율적인 하드웨어 빠르게 채택<br />
          <span>AWS가 새로운 인스턴스 세대를 출시하면 더 효율적인 하드웨어로 신속하게 마이그레이션합니다.</span>
        </li>
        <li>
          <strong>SUS05-BP05:</strong> 공유 스토리지 액세스 사용<br />
          <span>EFS, FSx 등 공유 파일 시스템으로 중복 스토리지 하드웨어를 줄입니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
